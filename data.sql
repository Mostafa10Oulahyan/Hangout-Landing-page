-- =====================================================
-- USERS & AUTHENTICATION (CLERK VERSION)
-- =====================================================

-- Profiles table - works with Clerk user IDs from JWT
CREATE TABLE public.profiles (
    id TEXT PRIMARY KEY NOT NULL DEFAULT auth.jwt()->>'sub',
    first_name VARCHAR(50) NOT NULL,
    photo_url TEXT,
    bio TEXT,
    date_of_birth DATE,
    gender VARCHAR(20),
    city VARCHAR(100),
    country VARCHAR(100),
    is_verified BOOLEAN DEFAULT FALSE,
    verification_method VARCHAR(50), -- 'email', 'phone', 'id_document'
    rating_average DECIMAL(3, 2) DEFAULT 0.00,
    rating_count INTEGER DEFAULT 0,
    groups_created_count INTEGER DEFAULT 0,
    groups_joined_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    is_blocked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User interests/tags
CREATE TABLE public.interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_name VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Many-to-many: Users <-> Interests
CREATE TABLE public.user_interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    interest_id UUID REFERENCES public.interests(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, interest_id)
);

-- =====================================================
-- GROUPS/HANGOUTS
-- =====================================================

CREATE TABLE public.groups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    activity_type VARCHAR(50) NOT NULL, -- 'sports', 'coffee', 'gaming', 'study', etc.
    mood VARCHAR(50), -- 'chill', 'sport', 'fun', 'talk'
    
    -- Location
    location_name VARCHAR(200) NOT NULL,
    location_address TEXT,
    location_lat DECIMAL(10, 8) NOT NULL,
    location_lng DECIMAL(11, 8) NOT NULL,
    location_place_id VARCHAR(255), -- Google Places ID
    is_public_place BOOLEAN DEFAULT TRUE,
    
    -- Timing
    scheduled_at TIMESTAMPTZ NOT NULL,
    expires_at TIMESTAMPTZ, -- auto-delete after this time
    
    -- Capacity
    max_participants INTEGER NOT NULL DEFAULT 10,
    current_participants INTEGER DEFAULT 1, -- includes host
    
    -- Status
    status VARCHAR(20) DEFAULT 'active', -- 'active', 'full', 'cancelled', 'completed', 'expired'
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    CONSTRAINT valid_participant_count CHECK (current_participants <= max_participants),
    CONSTRAINT valid_scheduled_time CHECK (scheduled_at > created_at)
);

-- Group tags/interests
CREATE TABLE public.group_interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id UUID REFERENCES public.groups(id) ON DELETE CASCADE,
    interest_id UUID REFERENCES public.interests(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(group_id, interest_id)
);

-- =====================================================
-- GROUP MEMBERSHIP
-- =====================================================

CREATE TABLE public.group_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id UUID REFERENCES public.groups(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    role VARCHAR(20) DEFAULT 'member', -- 'host', 'member'
    status VARCHAR(20) DEFAULT 'joined', -- 'joined', 'left', 'removed'
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    left_at TIMESTAMPTZ,
    UNIQUE(group_id, user_id)
);

-- =====================================================
-- CHAT SYSTEM
-- =====================================================

CREATE TABLE public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id UUID REFERENCES public.groups(id) ON DELETE CASCADE,
    sender_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    message_type VARCHAR(20) DEFAULT 'text', -- 'text', 'system', 'image'
    attachment_url TEXT,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Track read status for messages
CREATE TABLE public.message_read_status (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    message_id UUID REFERENCES public.messages(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    read_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(message_id, user_id)
);

-- =====================================================
-- NOTIFICATIONS
-- =====================================================

CREATE TABLE public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL, -- 'group_reminder', 'new_message', 'group_full', 'group_cancelled', etc.
    title VARCHAR(200) NOT NULL,
    body TEXT,
    related_group_id UUID REFERENCES public.groups(id) ON DELETE CASCADE,
    related_user_id TEXT REFERENCES public.profiles(id) ON DELETE SET NULL,
    is_read BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- RATINGS & FEEDBACK
-- =====================================================

CREATE TABLE public.group_ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id UUID REFERENCES public.groups(id) ON DELETE CASCADE,
    rater_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    rated_user_id TEXT REFERENCES public.profiles(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    feedback TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(group_id, rater_id, rated_user_id)
);

-- =====================================================
-- SAFETY & MODERATION
-- =====================================================

CREATE TABLE public.reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reporter_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    reported_user_id TEXT REFERENCES public.profiles(id) ON DELETE CASCADE,
    reported_group_id UUID REFERENCES public.groups(id) ON DELETE CASCADE,
    report_type VARCHAR(50) NOT NULL, -- 'inappropriate_behavior', 'spam', 'harassment', 'fake_profile', etc.
    description TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'reviewed', 'resolved', 'dismissed'
    reviewed_by TEXT REFERENCES public.profiles(id),
    reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.blocked_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    blocker_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE,
    blocked_id TEXT REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(blocker_id, blocked_id)
);

-- =====================================================
-- USER PREFERENCES
-- =====================================================

CREATE TABLE public.user_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL DEFAULT auth.jwt()->>'sub' REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
    
    -- Notification preferences
    notify_new_groups BOOLEAN DEFAULT TRUE,
    notify_group_messages BOOLEAN DEFAULT TRUE,
    notify_group_reminders BOOLEAN DEFAULT TRUE,
    notify_group_updates BOOLEAN DEFAULT TRUE,
    
    -- Discovery preferences
    max_distance_km INTEGER DEFAULT 10,
    preferred_moods TEXT[], -- array of mood preferences
    preferred_activities TEXT[], -- array of activity preferences
    
    -- Privacy
    profile_visibility VARCHAR(20) DEFAULT 'public', -- 'public', 'members_only'
    show_location BOOLEAN DEFAULT TRUE,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- INDEXES FOR PERFORMANCE (OPTIMIZED)
-- =====================================================

-- Profiles - Only essential indexes
CREATE INDEX idx_profiles_is_active ON public.profiles(is_active) WHERE is_active = TRUE;
CREATE INDEX idx_profiles_country_city ON public.profiles(country, city);

-- Groups - Critical for map-based queries and filtering
CREATE INDEX idx_groups_location ON public.groups USING GIST (
    ll_to_earth(location_lat, location_lng)
);
CREATE INDEX idx_groups_status_scheduled ON public.groups(status, scheduled_at) 
    WHERE status IN ('active', 'full');
CREATE INDEX idx_groups_activity_type ON public.groups(activity_type) 
    WHERE status IN ('active', 'full');
CREATE INDEX idx_groups_host_id ON public.groups(host_id);

-- Group Members - Essential for joins
CREATE INDEX idx_group_members_user_status ON public.group_members(user_id, status);
CREATE INDEX idx_group_members_group_status ON public.group_members(group_id, status);

-- Messages - Optimized for chat queries
CREATE INDEX idx_messages_group_created ON public.messages(group_id, created_at DESC);

-- Notifications - User-specific queries
CREATE INDEX idx_notifications_user_read ON public.notifications(user_id, is_read, created_at DESC);

-- User Interests - Lookup optimization
CREATE INDEX idx_user_interests_user_id ON public.user_interests(user_id);
CREATE INDEX idx_user_interests_interest_id ON public.user_interests(interest_id);

-- Group Interests - Join optimization
CREATE INDEX idx_group_interests_group_id ON public.group_interests(group_id);
CREATE INDEX idx_group_interests_interest_id ON public.group_interests(interest_id);

-- Reports - Admin queries
CREATE INDEX idx_reports_status ON public.reports(status, created_at DESC);

-- Blocked Users - Quick lookup
CREATE INDEX idx_blocked_users_blocker ON public.blocked_users(blocker_id);

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_groups_updated_at BEFORE UPDATE ON public.groups
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_messages_updated_at BEFORE UPDATE ON public.messages
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_preferences_updated_at BEFORE UPDATE ON public.user_preferences
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Auto-update group participant count
CREATE OR REPLACE FUNCTION update_group_participant_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' AND NEW.status = 'joined' THEN
        UPDATE public.groups 
        SET current_participants = current_participants + 1
        WHERE id = NEW.group_id;
        
        -- Update group status if full
        UPDATE public.groups 
        SET status = 'full'
        WHERE id = NEW.group_id 
        AND current_participants >= max_participants
        AND status = 'active';
        
    ELSIF TG_OP = 'UPDATE' AND OLD.status = 'joined' AND NEW.status IN ('left', 'removed') THEN
        UPDATE public.groups 
        SET current_participants = current_participants - 1
        WHERE id = NEW.group_id;
        
        -- Update group status back to active if was full
        UPDATE public.groups 
        SET status = 'active'
        WHERE id = NEW.group_id 
        AND current_participants < max_participants
        AND status = 'full';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_group_participant_count
AFTER INSERT OR UPDATE ON public.group_members
FOR EACH ROW EXECUTE FUNCTION update_group_participant_count();

-- Auto-create host membership when group is created
CREATE OR REPLACE FUNCTION create_host_membership()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.group_members (group_id, user_id, role, status)
    VALUES (NEW.id, NEW.host_id, 'host', 'joined');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_create_host_membership
AFTER INSERT ON public.groups
FOR EACH ROW EXECUTE FUNCTION create_host_membership();

-- Update user rating average
CREATE OR REPLACE FUNCTION update_user_rating()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.profiles
    SET 
        rating_average = (
            SELECT COALESCE(AVG(rating)::DECIMAL(3,2), 0.00)
            FROM public.group_ratings
            WHERE rated_user_id = NEW.rated_user_id
        ),
        rating_count = (
            SELECT COUNT(*)
            FROM public.group_ratings
            WHERE rated_user_id = NEW.rated_user_id
        )
    WHERE id = NEW.rated_user_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_user_rating
AFTER INSERT ON public.group_ratings
FOR EACH ROW EXECUTE FUNCTION update_user_rating();

-- Update groups created/joined count
CREATE OR REPLACE FUNCTION update_user_group_counts()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        IF NEW.role = 'host' THEN
            UPDATE public.profiles 
            SET groups_created_count = groups_created_count + 1
            WHERE id = NEW.user_id;
        ELSE
            UPDATE public.profiles 
            SET groups_joined_count = groups_joined_count + 1
            WHERE id = NEW.user_id;
        END IF;
    ELSIF TG_OP = 'UPDATE' AND OLD.status = 'joined' AND NEW.status IN ('left', 'removed') THEN
        IF NEW.role != 'host' THEN
            UPDATE public.profiles 
            SET groups_joined_count = GREATEST(groups_joined_count - 1, 0)
            WHERE id = NEW.user_id;
        END IF;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_user_group_counts
AFTER INSERT OR UPDATE ON public.group_members
FOR EACH ROW EXECUTE FUNCTION update_user_group_counts();

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.message_read_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by everyone"
    ON public.profiles FOR SELECT
    USING (is_active = TRUE AND is_blocked = FALSE);

CREATE POLICY "Users can insert own profile"
    ON public.profiles FOR INSERT
    WITH CHECK (auth.jwt()->>'sub' = id);

CREATE POLICY "Users can update own profile"
    ON public.profiles FOR UPDATE
    USING (auth.jwt()->>'sub' = id);

-- Interests Policies (Public read-only)
CREATE POLICY "Interests are viewable by everyone"
    ON public.interests FOR SELECT
    USING (TRUE);

-- User Interests Policies
CREATE POLICY "User interests are viewable by everyone"
    ON public.user_interests FOR SELECT
    USING (TRUE);

CREATE POLICY "Users can manage own interests"
    ON public.user_interests FOR INSERT
    WITH CHECK (auth.jwt()->>'sub' = user_id);

CREATE POLICY "Users can delete own interests"
    ON public.user_interests FOR DELETE
    USING (auth.jwt()->>'sub' = user_id);

-- Groups Policies
CREATE POLICY "Active groups are viewable by everyone"
    ON public.groups FOR SELECT
    USING (status IN ('active', 'full'));

CREATE POLICY "Users can create groups"
    ON public.groups FOR INSERT
    WITH CHECK (auth.jwt()->>'sub' = host_id);

CREATE POLICY "Hosts can update their groups"
    ON public.groups FOR UPDATE
    USING (auth.jwt()->>'sub' = host_id);

CREATE POLICY "Hosts can delete their groups"
    ON public.groups FOR DELETE
    USING (auth.jwt()->>'sub' = host_id);

-- Group Interests Policies
CREATE POLICY "Everyone can view group interests"
    ON public.group_interests FOR SELECT
    USING (TRUE);

CREATE POLICY "Hosts can manage group interests"
    ON public.group_interests FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.groups
            WHERE id = group_interests.group_id
            AND host_id = auth.jwt()->>'sub'
        )
    );

CREATE POLICY "Hosts can delete group interests"
    ON public.group_interests FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.groups
            WHERE id = group_interests.group_id
            AND host_id = auth.jwt()->>'sub'
        )
    );

-- Group Members Policies
CREATE POLICY "Group members are viewable by everyone"
    ON public.group_members FOR SELECT
    USING (TRUE);

CREATE POLICY "Users can join groups"
    ON public.group_members FOR INSERT
    WITH CHECK (auth.jwt()->>'sub' = user_id);

CREATE POLICY "Users can update their membership"
    ON public.group_members FOR UPDATE
    USING (auth.jwt()->>'sub' = user_id OR 
           EXISTS (
               SELECT 1 FROM public.groups
               WHERE id = group_members.group_id
               AND host_id = auth.jwt()->>'sub'
           ));

-- Messages Policies
CREATE POLICY "Group members can view messages"
    ON public.messages FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.group_members
            WHERE group_id = messages.group_id
            AND user_id = auth.jwt()->>'sub'
            AND status = 'joined'
        )
    );

CREATE POLICY "Group members can send messages"
    ON public.messages FOR INSERT
    WITH CHECK (
        auth.jwt()->>'sub' = sender_id AND
        EXISTS (
            SELECT 1 FROM public.group_members
            WHERE group_id = messages.group_id
            AND user_id = auth.jwt()->>'sub'
            AND status = 'joined'
        )
    );

CREATE POLICY "Users can update own messages"
    ON public.messages FOR UPDATE
    USING (auth.jwt()->>'sub' = sender_id);

-- Message Read Status Policies
CREATE POLICY "Users can view own read status"
    ON public.message_read_status FOR SELECT
    USING (auth.jwt()->>'sub' = user_id);

CREATE POLICY "Users can insert own read status"
    ON public.message_read_status FOR INSERT
    WITH CHECK (auth.jwt()->>'sub' = user_id);

-- Notifications Policies
CREATE POLICY "Users can view own notifications"
    ON public.notifications FOR SELECT
    USING (auth.jwt()->>'sub' = user_id);

CREATE POLICY "Users can update own notifications"
    ON public.notifications FOR UPDATE
    USING (auth.jwt()->>'sub' = user_id);

-- Group Ratings Policies
CREATE POLICY "Users can view ratings"
    ON public.group_ratings FOR SELECT
    USING (TRUE);

CREATE POLICY "Users can create ratings"
    ON public.group_ratings FOR INSERT
    WITH CHECK (
        auth.jwt()->>'sub' = rater_id AND
        EXISTS (
            SELECT 1 FROM public.group_members
            WHERE group_id = group_ratings.group_id
            AND user_id = auth.jwt()->>'sub'
            AND status = 'joined'
        )
    );

-- Reports Policies
CREATE POLICY "Users can view own reports"
    ON public.reports FOR SELECT
    USING (auth.jwt()->>'sub' = reporter_id);

CREATE POLICY "Users can create reports"
    ON public.reports FOR INSERT
    WITH CHECK (auth.jwt()->>'sub' = reporter_id);

-- Blocked Users Policies
CREATE POLICY "Users can view own blocks"
    ON public.blocked_users FOR SELECT
    USING (auth.jwt()->>'sub' = blocker_id);

CREATE POLICY "Users can block others"
    ON public.blocked_users FOR INSERT
    WITH CHECK (auth.jwt()->>'sub' = blocker_id);

CREATE POLICY "Users can unblock others"
    ON public.blocked_users FOR DELETE
    USING (auth.jwt()->>'sub' = blocker_id);

-- User Preferences Policies
CREATE POLICY "Users can view own preferences"
    ON public.user_preferences FOR SELECT
    USING (auth.jwt()->>'sub' = user_id);

CREATE POLICY "Users can manage own preferences"
    ON public.user_preferences FOR INSERT
    WITH CHECK (auth.jwt()->>'sub' = user_id);

CREATE POLICY "Users can update own preferences"
    ON public.user_preferences FOR UPDATE
    USING (auth.jwt()->>'sub' = user_id);

-- =====================================================
-- HELPER FUNCTIONS FOR QUERIES
-- =====================================================

-- Function to find nearby groups
CREATE OR REPLACE FUNCTION find_nearby_groups(
    user_lat DECIMAL,
    user_lng DECIMAL,
    max_distance_km INTEGER DEFAULT 10,
    activity_filter VARCHAR DEFAULT NULL,
    mood_filter VARCHAR DEFAULT NULL
)
RETURNS TABLE (
    group_id UUID,
    distance_km DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        g.id,
        (earth_distance(
            ll_to_earth(user_lat, user_lng),
            ll_to_earth(g.location_lat, g.location_lng)
        ) / 1000)::DECIMAL(10,2) as distance_km
    FROM public.groups g
    WHERE 
        g.status IN ('active', 'full')
        AND g.scheduled_at > NOW()
        AND earth_distance(
            ll_to_earth(user_lat, user_lng),
            ll_to_earth(g.location_lat, g.location_lng)
        ) <= (max_distance_km * 1000)
        AND (activity_filter IS NULL OR g.activity_type = activity_filter)
        AND (mood_filter IS NULL OR g.mood = mood_filter)
    ORDER BY distance_km;
END;
$$ LANGUAGE plpgsql;

-- Function to get user's joined groups
CREATE OR REPLACE FUNCTION get_user_groups(target_user_id TEXT)
RETURNS TABLE (
    group_id UUID,
    role VARCHAR,
    joined_at TIMESTAMPTZ
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        gm.group_id,
        gm.role,
        gm.joined_at
    FROM public.group_members gm
    WHERE 
        gm.user_id = target_user_id
        AND gm.status = 'joined'
    ORDER BY gm.joined_at DESC;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- Insert Data 
-- =====================================================

-- =====================================================
-- SAMPLE DATA INSERTS FOR CLERK VERSION
-- =====================================================

-- Note: These use Clerk-style user IDs (format: user_xxxxxxxxxxxxx)
-- In production, these will be auto-generated by Clerk

-- =====================================================
-- 1. PROFILES (Sample Users)
-- =====================================================

INSERT INTO public.profiles (id, first_name, photo_url, bio, date_of_birth, gender, city, country, is_verified, rating_average, rating_count) VALUES
('user_2abc123def456gh1', 'Ahmed', 'https://i.pravatar.cc/150?img=1', 'Love hiking and outdoor adventures! Always up for coffee.', '1995-03-15', 'male', 'Tangier', 'Morocco', true, 4.5, 12),
('user_2abc123def456gh2', 'Sara', 'https://i.pravatar.cc/150?img=2', 'Yoga instructor and photography enthusiast 📸', '1992-07-22', 'female', 'Tangier', 'Morocco', true, 4.8, 25),
('user_2abc123def456gh3', 'Youssef', 'https://i.pravatar.cc/150?img=3', 'Gamer and tech lover. Looking for gaming buddies!', '1998-11-03', 'male', 'Casablanca', 'Morocco', true, 4.2, 8),
('user_2abc123def456gh4', 'Fatima', 'https://i.pravatar.cc/150?img=4', 'Book club organizer and coffee addict ☕', '1990-05-18', 'female', 'Tangier', 'Morocco', false, 4.6, 15),
('user_2abc123def456gh5', 'Karim', 'https://i.pravatar.cc/150?img=5', 'Basketball player, always looking for pickup games', '1996-09-30', 'male', 'Rabat', 'Morocco', true, 4.3, 10),
('user_2abc123def456gh6', 'Amina', 'https://i.pravatar.cc/150?img=6', 'Runner and fitness enthusiast 🏃‍♀️', '1994-12-08', 'female', 'Tangier', 'Morocco', true, 4.7, 18),
('user_2abc123def456gh7', 'Omar', 'https://i.pravatar.cc/150?img=7', 'Love exploring new restaurants and cooking', '1991-04-25', 'male', 'Marrakech', 'Morocco', false, 4.4, 6),
('user_2abc123def456gh8', 'Laila', 'https://i.pravatar.cc/150?img=8', 'Art lover and museum explorer', '1993-08-14', 'female', 'Tangier', 'Morocco', true, 4.9, 22),
('user_2abc123def456gh9', 'Hassan', 'https://i.pravatar.cc/150?img=9', 'Cyclist and outdoor adventurer 🚴', '1997-01-20', 'male', 'Fes', 'Morocco', true, 4.1, 9),
('user_2abc123def456g10', 'Nadia', 'https://i.pravatar.cc/150?img=10', 'Music lover and concert goer 🎵', '1995-06-12', 'female', 'Tangier', 'Morocco', true, 4.5, 14);

-- =====================================================
-- 2. USER INTERESTS (Link users to interests)
-- =====================================================

-- Ahmed's interests (Coffee, Hiking, Photography)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh1', (SELECT id FROM public.interests WHERE category_name = 'Coffee')),
('user_2abc123def456gh1', (SELECT id FROM public.interests WHERE category_name = 'Hiking')),
('user_2abc123def456gh1', (SELECT id FROM public.interests WHERE category_name = 'Photography'));

-- Sara's interests (Yoga, Photography, Art)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh2', (SELECT id FROM public.interests WHERE category_name = 'Yoga')),
('user_2abc123def456gh2', (SELECT id FROM public.interests WHERE category_name = 'Photography')),
('user_2abc123def456gh2', (SELECT id FROM public.interests WHERE category_name = 'Art'));

-- Youssef's interests (Gaming, Board Games)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh3', (SELECT id FROM public.interests WHERE category_name = 'Gaming')),
('user_2abc123def456gh3', (SELECT id FROM public.interests WHERE category_name = 'Board Games'));

-- Fatima's interests (Reading, Coffee, Study)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh4', (SELECT id FROM public.interests WHERE category_name = 'Reading')),
('user_2abc123def456gh4', (SELECT id FROM public.interests WHERE category_name = 'Coffee')),
('user_2abc123def456gh4', (SELECT id FROM public.interests WHERE category_name = 'Study'));

-- Karim's interests (Basketball, Swimming)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh5', (SELECT id FROM public.interests WHERE category_name = 'Basketball')),
('user_2abc123def456gh5', (SELECT id FROM public.interests WHERE category_name = 'Swimming'));

-- Amina's interests (Running, Yoga, Walking)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh6', (SELECT id FROM public.interests WHERE category_name = 'Running')),
('user_2abc123def456gh6', (SELECT id FROM public.interests WHERE category_name = 'Yoga')),
('user_2abc123def456gh6', (SELECT id FROM public.interests WHERE category_name = 'Walking'));

-- Omar's interests (Cooking, Coffee)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh7', (SELECT id FROM public.interests WHERE category_name = 'Cooking')),
('user_2abc123def456gh7', (SELECT id FROM public.interests WHERE category_name = 'Coffee'));

-- Laila's interests (Art, Photography, Movies)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh8', (SELECT id FROM public.interests WHERE category_name = 'Art')),
('user_2abc123def456gh8', (SELECT id FROM public.interests WHERE category_name = 'Photography')),
('user_2abc123def456gh8', (SELECT id FROM public.interests WHERE category_name = 'Movies'));

-- Hassan's interests (Cycling, Hiking)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456gh9', (SELECT id FROM public.interests WHERE category_name = 'Cycling')),
('user_2abc123def456gh9', (SELECT id FROM public.interests WHERE category_name = 'Hiking'));

-- Nadia's interests (Music, Dancing, Movies)
INSERT INTO public.user_interests (user_id, interest_id) VALUES
('user_2abc123def456g10', (SELECT id FROM public.interests WHERE category_name = 'Music')),
('user_2abc123def456g10', (SELECT id FROM public.interests WHERE category_name = 'Dancing')),
('user_2abc123def456g10', (SELECT id FROM public.interests WHERE category_name = 'Movies'));

-- =====================================================
-- 3. GROUPS (Sample Hangouts)
-- =====================================================

-- Group 1: Morning Coffee Chat (Tangier)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, location_place_id, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh1', 
 'Morning Coffee & Networking', 
 'Casual coffee meetup to chat and network. All are welcome!', 
 'coffee', 
 'chill', 
 'Café Hafa', 
 'Avenue Hadi Mohamed, Tangier 90000, Morocco', 
 35.7847, 
 -5.8142, 
 'ChIJxxxxxx', 
 NOW() + INTERVAL '2 days', 
 6, 
 1, 
 'active');

-- Group 2: Evening Hiking (Tangier)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh2', 
 'Sunset Hiking at Cap Spartel', 
 'Join us for a beautiful sunset hike! Moderate difficulty.', 
 'hiking', 
 'sport', 
 'Cap Spartel', 
 'Cap Spartel, Tangier, Morocco', 
 35.7928, 
 -5.9233, 
 NOW() + INTERVAL '3 days', 
 8, 
 1, 
 'active');

-- Group 3: Gaming Night (Casablanca)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh3', 
 'Board Game Night', 
 'Bring your favorite games or try new ones. Pizza included!', 
 'gaming', 
 'fun', 
 'The Gaming Lounge', 
 'Boulevard de la Corniche, Casablanca, Morocco', 
 33.5731, 
 -7.5898, 
 NOW() + INTERVAL '5 days', 
 10, 
 1, 
 'active');

-- Group 4: Book Club Meeting (Tangier)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh4', 
 'Book Club: "The Alchemist" Discussion', 
 'Monthly book club meeting. This month we discuss Paulo Coelho.', 
 'reading', 
 'talk', 
 'Librairie des Colonnes', 
 '54 Boulevard Pasteur, Tangier 90000, Morocco', 
 35.7677, 
 -5.8073, 
 NOW() + INTERVAL '1 week', 
 12, 
 1, 
 'active');

-- Group 5: Basketball Pickup Game (Rabat)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh5', 
 'Pickup Basketball Game', 
 '5v5 friendly game. All skill levels welcome!', 
 'basketball', 
 'sport', 
 'Prince Moulay Abdellah Stadium', 
 'Avenue Imam Malik, Rabat, Morocco', 
 33.9716, 
 -6.8498, 
 NOW() + INTERVAL '4 days', 
 10, 
 1, 
 'active');

-- Group 6: Morning Run (Tangier)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh6', 
 'Morning Run - 5K', 
 'Easy pace run along the beach. Perfect for beginners!', 
 'running', 
 'sport', 
 'Tangier Beach', 
 'Corniche, Tangier, Morocco', 
 35.7595, 
 -5.8340, 
 NOW() + INTERVAL '1 day', 
 15, 
 1, 
 'active');

-- Group 7: Cooking Class (Marrakech)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh7', 
 'Moroccan Cooking Workshop', 
 'Learn to make traditional tagine! Ingredients provided.', 
 'cooking', 
 'fun', 
 'La Maison Arabe', 
 '1 Derb Assehbe, Marrakech 40000, Morocco', 
 31.6295, 
 -7.9811, 
 NOW() + INTERVAL '6 days', 
 8, 
 1, 
 'active');

-- Group 8: Museum Visit (Tangier)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh8', 
 'Kasbah Museum Tour', 
 'Guided tour of the historic Kasbah Museum followed by tea.', 
 'art', 
 'chill', 
 'Kasbah Museum', 
 'Place de la Kasbah, Tangier, Morocco', 
 35.7894, 
 -5.8108, 
 NOW() + INTERVAL '2 days', 
 10, 
 1, 
 'active');

-- Group 9: Cycling Trip (Fes)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh9', 
 'Countryside Cycling Adventure', 
 '25km ride through scenic routes. Bring your own bike.', 
 'cycling', 
 'sport', 
 'Bab Boujloud', 
 'Talaa Kebira, Fes, Morocco', 
 34.0616, 
 -4.9749, 
 NOW() + INTERVAL '5 days', 
 12, 
 1, 
 'active');

-- Group 10: Live Music Event (Tangier)
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, max_participants, current_participants, status) VALUES
('user_2abc123def456g10', 
 'Jazz Night at El Morocco Club', 
 'Live jazz performance. Great vibes and drinks!', 
 'music', 
 'fun', 
 'El Morocco Club', 
 'Place du Tabor, Tangier, Morocco', 
 35.7690, 
 -5.8097, 
 NOW() + INTERVAL '3 days', 
 20, 
 1, 
 'active');

-- =====================================================
-- 4. GROUP INTERESTS (Tag groups)
-- =====================================================

-- Group 1 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Morning Coffee & Networking'), 
 (SELECT id FROM public.interests WHERE category_name = 'Coffee'));

-- Group 2 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel'), 
 (SELECT id FROM public.interests WHERE category_name = 'Hiking')),
((SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel'), 
 (SELECT id FROM public.interests WHERE category_name = 'Photography'));

-- Group 3 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Board Game Night'), 
 (SELECT id FROM public.interests WHERE category_name = 'Board Games'));

-- Group 4 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Book Club: "The Alchemist" Discussion'), 
 (SELECT id FROM public.interests WHERE category_name = 'Reading'));

-- Group 5 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Pickup Basketball Game'), 
 (SELECT id FROM public.interests WHERE category_name = 'Basketball'));

-- Group 6 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Morning Run - 5K'), 
 (SELECT id FROM public.interests WHERE category_name = 'Running'));

-- Group 7 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Moroccan Cooking Workshop'), 
 (SELECT id FROM public.interests WHERE category_name = 'Cooking'));

-- Group 8 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Kasbah Museum Tour'), 
 (SELECT id FROM public.interests WHERE category_name = 'Art'));

-- Group 9 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Countryside Cycling Adventure'), 
 (SELECT id FROM public.interests WHERE category_name = 'Cycling'));

-- Group 10 interests
INSERT INTO public.group_interests (group_id, interest_id) VALUES
((SELECT id FROM public.groups WHERE title = 'Jazz Night at El Morocco Club'), 
 (SELECT id FROM public.interests WHERE category_name = 'Music'));

-- =====================================================
-- 5. GROUP MEMBERS (Users joining groups)
-- =====================================================

-- Note: Hosts are automatically added via trigger, so we only add additional members

-- Coffee meetup members
INSERT INTO public.group_members (group_id, user_id, role, status) VALUES
((SELECT id FROM public.groups WHERE title = 'Morning Coffee & Networking'), 
 'user_2abc123def456gh4', 'member', 'joined'),
((SELECT id FROM public.groups WHERE title = 'Morning Coffee & Networking'), 
 'user_2abc123def456gh7', 'member', 'joined');

-- Hiking members
INSERT INTO public.group_members (group_id, user_id, role, status) VALUES
((SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel'), 
 'user_2abc123def456gh1', 'member', 'joined'),
((SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel'), 
 'user_2abc123def456gh9', 'member', 'joined'),
((SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel'), 
 'user_2abc123def456gh6', 'member', 'joined');

-- Gaming night members
INSERT INTO public.group_members (group_id, user_id, role, status) VALUES
((SELECT id FROM public.groups WHERE title = 'Board Game Night'), 
 'user_2abc123def456gh4', 'member', 'joined');

-- Book club members
INSERT INTO public.group_members (group_id, user_id, role, status) VALUES
((SELECT id FROM public.groups WHERE title = 'Book Club: "The Alchemist" Discussion'), 
 'user_2abc123def456gh8', 'member', 'joined'),
((SELECT id FROM public.groups WHERE title = 'Book Club: "The Alchemist" Discussion'), 
 'user_2abc123def456gh1', 'member', 'joined');

-- Basketball members
INSERT INTO public.group_members (group_id, user_id, role, status) VALUES
((SELECT id FROM public.groups WHERE title = 'Pickup Basketball Game'), 
 'user_2abc123def456gh3', 'member', 'joined');

-- Running members
INSERT INTO public.group_members (group_id, user_id, role, status) VALUES
((SELECT id FROM public.groups WHERE title = 'Morning Run - 5K'), 
 'user_2abc123def456gh2', 'member', 'joined'),
((SELECT id FROM public.groups WHERE title = 'Morning Run - 5K'), 
 'user_2abc123def456gh4', 'member', 'joined');

-- Music event members
INSERT INTO public.group_members (group_id, user_id, role, status) VALUES
((SELECT id FROM public.groups WHERE title = 'Jazz Night at El Morocco Club'), 
 'user_2abc123def456gh8', 'member', 'joined'),
((SELECT id FROM public.groups WHERE title = 'Jazz Night at El Morocco Club'), 
 'user_2abc123def456gh2', 'member', 'joined');

-- =====================================================
-- 6. MESSAGES (Sample chat messages)
-- =====================================================

-- Messages for Coffee meetup
INSERT INTO public.messages (group_id, sender_id, content, message_type) VALUES
((SELECT id FROM public.groups WHERE title = 'Morning Coffee & Networking'), 
 'user_2abc123def456gh1', 
 'Hey everyone! Looking forward to meeting you all!', 
 'text'),
((SELECT id FROM public.groups WHERE title = 'Morning Coffee & Networking'), 
 'user_2abc123def456gh4', 
 'Same here! What time should we arrive?', 
 'text'),
((SELECT id FROM public.groups WHERE title = 'Morning Coffee & Networking'), 
 'user_2abc123def456gh1', 
 'Around 9:30 AM would be perfect. See you there!', 
 'text');

-- Messages for Hiking group
INSERT INTO public.messages (group_id, sender_id, content, message_type) VALUES
((SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel'), 
 'user_2abc123def456gh2', 
 'Don''t forget to bring water and comfortable shoes!', 
 'text'),
((SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel'), 
 'user_2abc123def456gh1', 
 'Should we bring cameras for the sunset?', 
 'text'),
((SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel'), 
 'user_2abc123def456gh2', 
 'Absolutely! The views are amazing 📸', 
 'text');

-- Messages for Basketball game
INSERT INTO public.messages (group_id, sender_id, content, message_type) VALUES
((SELECT id FROM public.groups WHERE title = 'Pickup Basketball Game'), 
 'user_2abc123def456gh5', 
 'Bring your A-game! 🏀', 
 'text'),
((SELECT id FROM public.groups WHERE title = 'Pickup Basketball Game'), 
 'user_2abc123def456gh3', 
 'Can''t wait! What''s the skill level?', 
 'text'),
((SELECT id FROM public.groups WHERE title = 'Pickup Basketball Game'), 
 'user_2abc123def456gh5', 
 'Mix of all levels - just come ready to have fun!', 
 'text');

-- =====================================================
-- 7. NOTIFICATIONS (Sample notifications)
-- =====================================================

INSERT INTO public.notifications (user_id, type, title, body, related_group_id) VALUES
('user_2abc123def456gh4', 
 'group_reminder', 
 'Upcoming Event Tomorrow', 
 'Your event "Morning Coffee & Networking" is happening tomorrow at 9:30 AM',
 (SELECT id FROM public.groups WHERE title = 'Morning Coffee & Networking')),
 
('user_2abc123def456gh1', 
 'new_message', 
 'New message in Sunset Hiking', 
 'Sara sent a new message',
 (SELECT id FROM public.groups WHERE title = 'Sunset Hiking at Cap Spartel')),

('user_2abc123def456gh3',
 'group_full',
 'Group is Almost Full!',
 'Your group "Board Game Night" has 8/10 spots filled',
 (SELECT id FROM public.groups WHERE title = 'Board Game Night'));

-- =====================================================
-- 8. USER PREFERENCES (Sample preferences)
-- =====================================================

INSERT INTO public.user_preferences (user_id, max_distance_km, preferred_moods, preferred_activities) VALUES
('user_2abc123def456gh1', 15, ARRAY['chill', 'sport'], ARRAY['coffee', 'hiking', 'photography']),
('user_2abc123def456gh2', 20, ARRAY['sport', 'fun'], ARRAY['yoga', 'hiking', 'running']),
('user_2abc123def456gh3', 10, ARRAY['fun'], ARRAY['gaming', 'movies']),
('user_2abc123def456gh4', 8, ARRAY['chill', 'talk'], ARRAY['reading', 'coffee']),
('user_2abc123def456gh5', 25, ARRAY['sport'], ARRAY['basketball', 'swimming']),
('user_2abc123def456gh6', 12, ARRAY['sport', 'chill'], ARRAY['running', 'walking', 'yoga']),
('user_2abc123def456gh7', 15, ARRAY['fun', 'chill'], ARRAY['cooking', 'coffee']),
('user_2abc123def456gh8', 10, ARRAY['chill', 'talk'], ARRAY['art', 'photography', 'movies']);

-- =====================================================
-- 9. GROUP RATINGS (Sample post-event ratings)
-- =====================================================

-- Create a completed group for rating demonstration
INSERT INTO public.groups (host_id, title, description, activity_type, mood, location_name, location_address, location_lat, location_lng, scheduled_at, expires_at, max_participants, current_participants, status) VALUES
('user_2abc123def456gh1', 
 'Weekend Coffee Meetup (Past)', 
 'Had a great time meeting new people!', 
 'coffee', 
 'chill', 
 'Café Central', 
 'Grand Socco, Tangier, Morocco', 
 35.7747, 
 -5.8112, 
 NOW() - INTERVAL '5 days', 
 NOW() - INTERVAL '4 days',
 6, 
 4, 
 'completed');

-- Add members to past group
INSERT INTO public.group_members (group_id, user_id, role, status) VALUES
((SELECT id FROM public.groups WHERE title = 'Weekend Coffee Meetup (Past)'), 
 'user_2abc123def456gh4', 'member', 'joined'),
((SELECT id FROM public.groups WHERE title = 'Weekend Coffee Meetup (Past)'), 
 'user_2abc123def456gh8', 'member', 'joined'),
((SELECT id FROM public.groups WHERE title = 'Weekend Coffee Meetup (Past)'), 
 'user_2abc123def456gh7', 'member', 'joined');

-- Add ratings
INSERT INTO public.group_ratings (group_id, rater_id, rated_user_id, rating, feedback) VALUES
((SELECT id FROM public.groups WHERE title = 'Weekend Coffee Meetup (Past)'), 
 'user_2abc123def456gh4', 
 'user_2abc123def456gh1', 
 5, 
 'Great host! Very welcoming and organized.'),
 
((SELECT id FROM public.groups WHERE title = 'Weekend Coffee Meetup (Past)'), 
 'user_2abc123def456gh8', 
 'user_2abc123def456gh1', 
 4, 
 'Nice meetup, would join again!'),

((SELECT id FROM public.groups WHERE title = 'Weekend Coffee Meetup (Past)'), 
 'user_2abc123def456gh7', 
 'user_2abc123def456gh1', 
 5, 
 'Amazing experience! Met wonderful people.');

-- =====================================================
-- 10. BLOCKED USERS (Sample - for testing)
-- =====================================================

-- Example: User blocks another user
INSERT INTO public.blocked_users (blocker_id, blocked_id) VALUES
('user_2abc123def456gh3', 'user_2abc123def456gh5');

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================

-- Check all data counts
SELECT 'Profiles' as table_name, COUNT(*) as count FROM public.profiles
UNION ALL
SELECT 'Interests', COUNT(*) FROM public.interests
UNION ALL
SELECT 'User Interests', COUNT(*) FROM public.user_interests
UNION ALL
SELECT 'Groups', COUNT(*) FROM public.groups
UNION ALL
SELECT 'Group Interests', COUNT(*) FROM public.group_interests
UNION ALL
SELECT 'Group Members', COUNT(*) FROM public.group_members
UNION ALL
SELECT 'Messages', COUNT(*) FROM public.messages
UNION ALL
SELECT 'Notifications', COUNT(*) FROM public.notifications
UNION ALL
SELECT 'User Preferences', COUNT(*) FROM public.user_preferences
UNION ALL
SELECT 'Group Ratings', COUNT(*) FROM public.group_ratings
UNION ALL
SELECT 'Blocked Users', COUNT(*) FROM public.blocked_users;

-- =====================================================
-- ADDITIONAL TEST QUERIES
-- =====================================================

-- View all active groups with host info
SELECT 
    g.title,
    g.activity_type,
    g.mood,
    g.location_name,
    g.scheduled_at,
    g.current_participants || '/' || g.max_participants as capacity,
    p.first_name as host_name
FROM public.groups g
JOIN public.profiles p ON g.host_id = p.id
WHERE g.status = 'active'
ORDER BY g.scheduled_at;

-- View users with their interests
SELECT 
    p.first_name,
    p.city,
    ARRAY_AGG(i.category_name) as interests
FROM public.profiles p
LEFT JOIN public.user_interests ui ON p.id = ui.user_id
LEFT JOIN public.interests i ON ui.interest_id = i.id
GROUP BY p.id, p.first_name, p.city
ORDER BY p.first_name;

-- View group members for each group
SELECT 
    g.title,
    COUNT(gm.id) as member_count,
    STRING_AGG(p.first_name, ', ') as members
FROM public.groups g
LEFT JOIN public.group_members gm ON g.id = gm.group_id
LEFT JOIN public.profiles p ON gm.user_id = p.id
WHERE gm.status = 'joined'
GROUP BY g.id, g.title
ORDER BY member_count DESC;