-- Create SEO Marketing Agent Logs Table
CREATE TABLE IF NOT EXISTS public.seo_marketing_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    run_date DATE NOT NULL,
    run_time TIME NOT NULL,
    task_type TEXT NOT NULL,
    task_title TEXT NOT NULL,
    task_description TEXT,
    status TEXT NOT NULL CHECK (status IN ('pending', 'running', 'completed', 'failed')),
    impact TEXT,
    created_at TIMESTAMP WITH TIME ZONE 'UTC' DEFAULT NOW() AT TIME ZONE 'Asia/Ho_Chi_Minh',
    updated_at TIMESTAMP WITH TIME ZONE 'UTC' DEFAULT NOW() AT TIME ZONE 'Asia/Ho_Chi_Minh'
);

-- Create Indexes
CREATE INDEX IF NOT EXISTS idx_seo_logs_date ON public.seo_marketing_logs(run_date DESC, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_seo_logs_type ON public.seo_marketing_logs(task_type);
CREATE INDEX IF NOT EXISTS idx_seo_logs_status ON public.seo_marketing_logs(status, created_at DESC);

-- Create Daily Summary View
CREATE OR REPLACE VIEW public.seo_marketing_daily_summary AS
SELECT 
    run_date,
    COUNT(*) as total_tasks,
    COUNT(*) FILTER (WHERE status = 'completed') as completed_tasks,
    COUNT(*) FILTER (WHERE status = 'failed') as failed_tasks,
    MAX(created_at) as last_activity
FROM public.seo_marketing_logs
GROUP BY run_date
ORDER BY run_date DESC;

-- Grant Permissions
GRANT ALL ON public.seo_marketing_logs TO authenticated;
GRANT ALL ON public.seo_marketing_logs TO anon;
GRANT SELECT ON public.seo_marketing_daily_summary TO authenticated;
GRANT SELECT ON public.seo_marketing_daily_summary TO anon;
