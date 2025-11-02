export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      ai_recommendations: {
        Row: {
          confidence_score: number | null
          context: Json | null
          created_at: string
          id: string
          reason: string | null
          recommendation_type: string
          user_id: string
          wine_id: string
        }
        Insert: {
          confidence_score?: number | null
          context?: Json | null
          created_at?: string
          id?: string
          reason?: string | null
          recommendation_type: string
          user_id: string
          wine_id: string
        }
        Update: {
          confidence_score?: number | null
          context?: Json | null
          created_at?: string
          id?: string
          reason?: string | null
          recommendation_type?: string
          user_id?: string
          wine_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_recommendations_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wine_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_runs: {
        Row: {
          created_at: string
          id: string
          name: string
          parts_analyzed: number | null
          run_date: string
          run_type: string
          settings: Json | null
          status: string
          total_results_found: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          parts_analyzed?: number | null
          run_date?: string
          run_type?: string
          settings?: Json | null
          status?: string
          total_results_found?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          parts_analyzed?: number | null
          run_date?: string
          run_type?: string
          settings?: Json | null
          status?: string
          total_results_found?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          created_at: string
          currency: string | null
          event_data: Json | null
          event_name: string
          event_type: string
          id: string
          page_path: string | null
          revenue_value: number | null
          transaction_id: string | null
          user_session_id: string | null
        }
        Insert: {
          created_at?: string
          currency?: string | null
          event_data?: Json | null
          event_name: string
          event_type: string
          id?: string
          page_path?: string | null
          revenue_value?: number | null
          transaction_id?: string | null
          user_session_id?: string | null
        }
        Update: {
          created_at?: string
          currency?: string | null
          event_data?: Json | null
          event_name?: string
          event_type?: string
          id?: string
          page_path?: string | null
          revenue_value?: number | null
          transaction_id?: string | null
          user_session_id?: string | null
        }
        Relationships: []
      }
      analytics_insights: {
        Row: {
          book_purchase_clicks: number
          conversion_change_percent: number | null
          created_at: string
          cta_clicks: number
          engagement_change_percent: number | null
          engagement_rate: number
          id: string
          lead_generation: number
          navigation_clicks: number
          new_visitors_count: number
          newsletter_engagement: number | null
          newsletter_signups: number
          newsletter_submissions: number | null
          outbound_clicks: number
          reading_requests: number
          returning_visitors_count: number
          top_pages: Json
          total_page_views: number
          total_sessions: number
          total_visitors: number
          traffic_sources: Json
          updated_at: string
          upload_id: string
          visitor_change_percent: number | null
          week_end_date: string
          week_start_date: string
        }
        Insert: {
          book_purchase_clicks?: number
          conversion_change_percent?: number | null
          created_at?: string
          cta_clicks?: number
          engagement_change_percent?: number | null
          engagement_rate?: number
          id?: string
          lead_generation?: number
          navigation_clicks?: number
          new_visitors_count?: number
          newsletter_engagement?: number | null
          newsletter_signups?: number
          newsletter_submissions?: number | null
          outbound_clicks?: number
          reading_requests?: number
          returning_visitors_count?: number
          top_pages?: Json
          total_page_views?: number
          total_sessions?: number
          total_visitors?: number
          traffic_sources?: Json
          updated_at?: string
          upload_id: string
          visitor_change_percent?: number | null
          week_end_date: string
          week_start_date: string
        }
        Update: {
          book_purchase_clicks?: number
          conversion_change_percent?: number | null
          created_at?: string
          cta_clicks?: number
          engagement_change_percent?: number | null
          engagement_rate?: number
          id?: string
          lead_generation?: number
          navigation_clicks?: number
          new_visitors_count?: number
          newsletter_engagement?: number | null
          newsletter_signups?: number
          newsletter_submissions?: number | null
          outbound_clicks?: number
          reading_requests?: number
          returning_visitors_count?: number
          top_pages?: Json
          total_page_views?: number
          total_sessions?: number
          total_visitors?: number
          traffic_sources?: Json
          updated_at?: string
          upload_id?: string
          visitor_change_percent?: number | null
          week_end_date?: string
          week_start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_insights_upload_id_fkey"
            columns: ["upload_id"]
            isOneToOne: false
            referencedRelation: "analytics_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_recommendations: {
        Row: {
          action_items: Json
          category: string
          created_at: string
          description: string
          id: string
          insight_id: string
          priority: string
          title: string
        }
        Insert: {
          action_items?: Json
          category: string
          created_at?: string
          description: string
          id?: string
          insight_id: string
          priority?: string
          title: string
        }
        Update: {
          action_items?: Json
          category?: string
          created_at?: string
          description?: string
          id?: string
          insight_id?: string
          priority?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_recommendations_insight_id_fkey"
            columns: ["insight_id"]
            isOneToOne: false
            referencedRelation: "analytics_insights"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_snapshots: {
        Row: {
          avg_session_duration: number | null
          conversion_metrics: Json
          created_at: string
          daily_trends: Json
          device_breakdown: Json
          geographic_breakdown: Json
          id: string
          newsletter_metrics: Json
          snapshot_date: string
          today_visitors: number
          top_pages: Json
          total_pageviews: number
          total_visitors: number
          traffic_sources: Json
          updated_at: string
        }
        Insert: {
          avg_session_duration?: number | null
          conversion_metrics?: Json
          created_at?: string
          daily_trends?: Json
          device_breakdown?: Json
          geographic_breakdown?: Json
          id?: string
          newsletter_metrics?: Json
          snapshot_date?: string
          today_visitors?: number
          top_pages?: Json
          total_pageviews?: number
          total_visitors?: number
          traffic_sources?: Json
          updated_at?: string
        }
        Update: {
          avg_session_duration?: number | null
          conversion_metrics?: Json
          created_at?: string
          daily_trends?: Json
          device_breakdown?: Json
          geographic_breakdown?: Json
          id?: string
          newsletter_metrics?: Json
          snapshot_date?: string
          today_visitors?: number
          top_pages?: Json
          total_pageviews?: number
          total_visitors?: number
          traffic_sources?: Json
          updated_at?: string
        }
        Relationships: []
      }
      analytics_uploads: {
        Row: {
          created_at: string
          csv_filename: string
          id: string
          raw_data: Json
          uploaded_at: string
          uploaded_by: string
          week_end_date: string
          week_start_date: string
        }
        Insert: {
          created_at?: string
          csv_filename: string
          id?: string
          raw_data: Json
          uploaded_at?: string
          uploaded_by: string
          week_end_date: string
          week_start_date: string
        }
        Update: {
          created_at?: string
          csv_filename?: string
          id?: string
          raw_data?: Json
          uploaded_at?: string
          uploaded_by?: string
          week_end_date?: string
          week_start_date?: string
        }
        Relationships: []
      }
      crm_clients: {
        Row: {
          created_at: string
          id: string
          industry: string | null
          last_contact: string | null
          name: string
          notes: string | null
          region: string | null
          status: string
          tenant_id: string
          thumbnail_url: string | null
          updated_at: string
          value: number | null
          website_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          industry?: string | null
          last_contact?: string | null
          name: string
          notes?: string | null
          region?: string | null
          status?: string
          tenant_id: string
          thumbnail_url?: string | null
          updated_at?: string
          value?: number | null
          website_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          industry?: string | null
          last_contact?: string | null
          name?: string
          notes?: string | null
          region?: string | null
          status?: string
          tenant_id?: string
          thumbnail_url?: string | null
          updated_at?: string
          value?: number | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crm_clients_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "crm_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_tenant_members: {
        Row: {
          created_at: string
          role: string
          tenant_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          role?: string
          tenant_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          role?: string
          tenant_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crm_tenant_members_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "crm_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_tenants: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      delta_admin_notifications: {
        Row: {
          applicant_id: string
          created_at: string
          id: string
          is_read: boolean | null
          notification_type: string
        }
        Insert: {
          applicant_id: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          notification_type: string
        }
        Update: {
          applicant_id?: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          notification_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "delta_admin_notifications_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "delta_applicant_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      delta_applicant_documents: {
        Row: {
          applicant_id: string
          document_type_id: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id: string
          updated_at: string
          upload_status: string
          uploaded_at: string
        }
        Insert: {
          applicant_id: string
          document_type_id: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id?: string
          updated_at?: string
          upload_status?: string
          uploaded_at?: string
        }
        Update: {
          applicant_id?: string
          document_type_id?: string
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          updated_at?: string
          upload_status?: string
          uploaded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "delta_applicant_documents_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "delta_applicant_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delta_applicant_documents_document_type_id_fkey"
            columns: ["document_type_id"]
            isOneToOne: false
            referencedRelation: "delta_document_types"
            referencedColumns: ["id"]
          },
        ]
      }
      delta_applicant_profiles: {
        Row: {
          created_at: string
          date_of_birth: string
          email: string
          full_name: string
          id: string
          nationality: string
          phone_number: string
          profile_completed: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date_of_birth: string
          email: string
          full_name: string
          id?: string
          nationality: string
          phone_number: string
          profile_completed?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date_of_birth?: string
          email?: string
          full_name?: string
          id?: string
          nationality?: string
          phone_number?: string
          profile_completed?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      delta_document_types: {
        Row: {
          accepted_formats: string[]
          created_at: string
          description: string | null
          display_order: number
          id: string
          is_required: boolean
          name: string
          slug: string
        }
        Insert: {
          accepted_formats?: string[]
          created_at?: string
          description?: string | null
          display_order: number
          id?: string
          is_required?: boolean
          name: string
          slug: string
        }
        Update: {
          accepted_formats?: string[]
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          is_required?: boolean
          name?: string
          slug?: string
        }
        Relationships: []
      }
      delta_user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["delta_app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["delta_app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["delta_app_role"]
          user_id?: string
        }
        Relationships: []
      }
      kings_circle_enrollment_tracker: {
        Row: {
          enrolled_count: number | null
          id: string
          last_updated: string | null
        }
        Insert: {
          enrolled_count?: number | null
          id?: string
          last_updated?: string | null
        }
        Update: {
          enrolled_count?: number | null
          id?: string
          last_updated?: string | null
        }
        Relationships: []
      }
      kings_circle_live_calls: {
        Row: {
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          recording_url: string | null
          scheduled_for: string
          status: string | null
          title: string
          updated_at: string | null
          zoom_link: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          recording_url?: string | null
          scheduled_for: string
          status?: string | null
          title: string
          updated_at?: string | null
          zoom_link?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          recording_url?: string | null
          scheduled_for?: string
          status?: string | null
          title?: string
          updated_at?: string | null
          zoom_link?: string | null
        }
        Relationships: []
      }
      kings_circle_memberships: {
        Row: {
          cancel_at_period_end: boolean | null
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          founding_member: boolean | null
          id: string
          member_since: string | null
          status: string
          stripe_customer_id: string
          subscription_id: string
          tier: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          founding_member?: boolean | null
          id?: string
          member_since?: string | null
          status: string
          stripe_customer_id: string
          subscription_id: string
          tier: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean | null
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          founding_member?: boolean | null
          id?: string
          member_since?: string | null
          status?: string
          stripe_customer_id?: string
          subscription_id?: string
          tier?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      kings_circle_modules: {
        Row: {
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          is_published: boolean | null
          module_number: number
          release_date: string | null
          title: string
          updated_at: string | null
          video_thumbnail: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          module_number: number
          release_date?: string | null
          title: string
          updated_at?: string | null
          video_thumbnail?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          module_number?: number
          release_date?: string | null
          title?: string
          updated_at?: string | null
          video_thumbnail?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      kings_circle_user_progress: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          created_at: string | null
          id: string
          last_accessed: string | null
          module_id: string
          user_id: string
          watch_time_seconds: number | null
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          last_accessed?: string | null
          module_id: string
          user_id: string
          watch_time_seconds?: number | null
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          last_accessed?: string | null
          module_id?: string
          user_id?: string
          watch_time_seconds?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "kings_circle_user_progress_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "kings_circle_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      kings_circle_user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["membership_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["membership_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["membership_role"]
          user_id?: string
        }
        Relationships: []
      }
      netflix_crm_clients: {
        Row: {
          created_at: string
          id: string
          industry: string | null
          last_contact: string | null
          name: string
          notes: string | null
          region: string | null
          relationship_started_at: string | null
          status: string
          tenant_id: string
          thumbnail_url: string | null
          updated_at: string
          value: number | null
          website_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          industry?: string | null
          last_contact?: string | null
          name: string
          notes?: string | null
          region?: string | null
          relationship_started_at?: string | null
          status?: string
          tenant_id: string
          thumbnail_url?: string | null
          updated_at?: string
          value?: number | null
          website_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          industry?: string | null
          last_contact?: string | null
          name?: string
          notes?: string | null
          region?: string | null
          relationship_started_at?: string | null
          status?: string
          tenant_id?: string
          thumbnail_url?: string | null
          updated_at?: string
          value?: number | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "netflix_crm_clients_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "netflix_crm_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      netflix_crm_tenant_members: {
        Row: {
          created_at: string
          role: string
          tenant_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          role?: string
          tenant_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          role?: string
          tenant_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "netflix_crm_tenant_members_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "netflix_crm_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      netflix_crm_tenants: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      parts_catalog: {
        Row: {
          category: string | null
          created_at: string
          datasheet_url: string | null
          description: string | null
          id: string
          image_url: string | null
          internal_currency: string | null
          last_price_update: string | null
          oem_id: string
          part_number: string
          purchase_price: number | null
          sales_price: number | null
          specifications: Json | null
          status: string | null
          target_delivery_days: number | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          datasheet_url?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          internal_currency?: string | null
          last_price_update?: string | null
          oem_id: string
          part_number: string
          purchase_price?: number | null
          sales_price?: number | null
          specifications?: Json | null
          status?: string | null
          target_delivery_days?: number | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          datasheet_url?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          internal_currency?: string | null
          last_price_update?: string | null
          oem_id?: string
          part_number?: string
          purchase_price?: number | null
          sales_price?: number | null
          specifications?: Json | null
          status?: string | null
          target_delivery_days?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "parts_catalog_oem_id_fkey"
            columns: ["oem_id"]
            isOneToOne: false
            referencedRelation: "parts_oems"
            referencedColumns: ["id"]
          },
        ]
      }
      parts_data_sources: {
        Row: {
          config: Json | null
          created_at: string
          id: string
          is_active: boolean | null
          last_sync: string | null
          name: string
          type: string
        }
        Insert: {
          config?: Json | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_sync?: string | null
          name: string
          type: string
        }
        Update: {
          config?: Json | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_sync?: string | null
          name?: string
          type?: string
        }
        Relationships: []
      }
      parts_oems: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
          name: string
          website_url: string | null
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id?: string
          name: string
          website_url?: string | null
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
          name?: string
          website_url?: string | null
        }
        Relationships: []
      }
      parts_pricing_data: {
        Row: {
          analysis_run_id: string | null
          availability_type: string | null
          available_regions: Json | null
          confidence_score: number | null
          created_at: string
          currency: string | null
          data_source: string | null
          id: string
          last_updated: string
          lead_time_days: number | null
          minimum_quantity: number | null
          part_id: string
          price: number
          search_timestamp: string | null
          source_url: string | null
          stock_quantity: number | null
          supplier_id: string
          supplier_region: string | null
        }
        Insert: {
          analysis_run_id?: string | null
          availability_type?: string | null
          available_regions?: Json | null
          confidence_score?: number | null
          created_at?: string
          currency?: string | null
          data_source?: string | null
          id?: string
          last_updated?: string
          lead_time_days?: number | null
          minimum_quantity?: number | null
          part_id: string
          price: number
          search_timestamp?: string | null
          source_url?: string | null
          stock_quantity?: number | null
          supplier_id: string
          supplier_region?: string | null
        }
        Update: {
          analysis_run_id?: string | null
          availability_type?: string | null
          available_regions?: Json | null
          confidence_score?: number | null
          created_at?: string
          currency?: string | null
          data_source?: string | null
          id?: string
          last_updated?: string
          lead_time_days?: number | null
          minimum_quantity?: number | null
          part_id?: string
          price?: number
          search_timestamp?: string | null
          source_url?: string | null
          stock_quantity?: number | null
          supplier_id?: string
          supplier_region?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "parts_pricing_data_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parts_pricing_data_part_id_fkey"
            columns: ["part_id"]
            isOneToOne: false
            referencedRelation: "parts_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parts_pricing_data_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "parts_suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      parts_search_history: {
        Row: {
          id: string
          oem_name: string
          part_number: string
          results_count: number | null
          searched_at: string
          user_id: string
        }
        Insert: {
          id?: string
          oem_name: string
          part_number: string
          results_count?: number | null
          searched_at?: string
          user_id: string
        }
        Update: {
          id?: string
          oem_name?: string
          part_number?: string
          results_count?: number | null
          searched_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parts_search_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "parts_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      parts_substitute_relationships: {
        Row: {
          compatibility_score: number | null
          created_at: string
          id: string
          notes: string | null
          original_part_id: string
          substitute_part_id: string
        }
        Insert: {
          compatibility_score?: number | null
          created_at?: string
          id?: string
          notes?: string | null
          original_part_id: string
          substitute_part_id: string
        }
        Update: {
          compatibility_score?: number | null
          created_at?: string
          id?: string
          notes?: string | null
          original_part_id?: string
          substitute_part_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parts_substitute_relationships_original_part_id_fkey"
            columns: ["original_part_id"]
            isOneToOne: false
            referencedRelation: "parts_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parts_substitute_relationships_substitute_part_id_fkey"
            columns: ["substitute_part_id"]
            isOneToOne: false
            referencedRelation: "parts_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      parts_suppliers: {
        Row: {
          api_endpoint: string | null
          country: string | null
          created_at: string
          id: string
          is_active: boolean | null
          name: string
          region: string | null
          reliability_score: number | null
          shipping_regions: Json | null
          updated_at: string
          website_url: string | null
        }
        Insert: {
          api_endpoint?: string | null
          country?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          name: string
          region?: string | null
          reliability_score?: number | null
          shipping_regions?: Json | null
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          api_endpoint?: string | null
          country?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          name?: string
          region?: string | null
          reliability_score?: number | null
          shipping_regions?: Json | null
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      parts_user_favorites: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          part_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          part_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          part_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parts_user_favorites_part_id_fkey"
            columns: ["part_id"]
            isOneToOne: false
            referencedRelation: "parts_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parts_user_favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "parts_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      parts_users: {
        Row: {
          company_name: string | null
          created_at: string
          department: string | null
          id: string
          preferences: Json | null
          role: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          department?: string | null
          id?: string
          preferences?: Json | null
          role?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          department?: string | null
          id?: string
          preferences?: Json | null
          role?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      river_authors: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          id: string
          name: string | null
          role: Database["public"]["Enums"]["river_role"]
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          id: string
          name?: string | null
          role?: Database["public"]["Enums"]["river_role"]
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["river_role"]
        }
        Relationships: []
      }
      river_comment_votes: {
        Row: {
          comment_id: string
          created_at: string
          id: string
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          comment_id: string
          created_at?: string
          id?: string
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          comment_id?: string
          created_at?: string
          id?: string
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "river_comment_votes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "river_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      river_comments: {
        Row: {
          author_email: string | null
          author_name: string
          content: string
          created_at: string
          edited_at: string | null
          helpful_count: number | null
          id: string
          is_author_reply: boolean | null
          parent_comment_id: string | null
          post_id: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          author_email?: string | null
          author_name: string
          content: string
          created_at?: string
          edited_at?: string | null
          helpful_count?: number | null
          id?: string
          is_author_reply?: boolean | null
          parent_comment_id?: string | null
          post_id: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          author_email?: string | null
          author_name?: string
          content?: string
          created_at?: string
          edited_at?: string | null
          helpful_count?: number | null
          id?: string
          is_author_reply?: boolean | null
          parent_comment_id?: string | null
          post_id?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "river_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "river_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "river_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "river_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      river_post_tags: {
        Row: {
          post_id: string
          tag_id: string
        }
        Insert: {
          post_id: string
          tag_id: string
        }
        Update: {
          post_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "river_post_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "river_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "river_post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "river_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      river_posts: {
        Row: {
          author_id: string | null
          content: string | null
          content_format: Database["public"]["Enums"]["river_content_format"]
          cover_image_url: string | null
          created_at: string
          excerpt: string | null
          id: string
          published_at: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: Database["public"]["Enums"]["river_post_status"]
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content?: string | null
          content_format?: Database["public"]["Enums"]["river_content_format"]
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: Database["public"]["Enums"]["river_post_status"]
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content?: string | null
          content_format?: Database["public"]["Enums"]["river_content_format"]
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["river_post_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "river_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "river_authors"
            referencedColumns: ["id"]
          },
        ]
      }
      river_tags: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      river_task_comments: {
        Row: {
          author_id: string
          comment_text: string
          created_at: string
          id: string
          task_id: string
          updated_at: string
        }
        Insert: {
          author_id: string
          comment_text: string
          created_at?: string
          id?: string
          task_id: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          comment_text?: string
          created_at?: string
          id?: string
          task_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "river_task_comments_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "river_authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "river_task_comments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "river_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      river_task_time_logs: {
        Row: {
          created_at: string
          description: string | null
          hours: number
          id: string
          logged_at: string
          task_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          hours: number
          id?: string
          logged_at?: string
          task_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          hours?: number
          id?: string
          logged_at?: string
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "river_task_time_logs_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "river_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "river_task_time_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "river_authors"
            referencedColumns: ["id"]
          },
        ]
      }
      river_tasks: {
        Row: {
          actual_hours: number | null
          assigned_to: string | null
          completed_at: string | null
          created_at: string
          created_by: string
          description: string | null
          due_date: string | null
          estimated_hours: number | null
          id: string
          priority: Database["public"]["Enums"]["task_priority"]
          status: Database["public"]["Enums"]["task_status"]
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          actual_hours?: number | null
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          due_date?: string | null
          estimated_hours?: number | null
          id?: string
          priority?: Database["public"]["Enums"]["task_priority"]
          status?: Database["public"]["Enums"]["task_status"]
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          actual_hours?: number | null
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          due_date?: string | null
          estimated_hours?: number | null
          id?: string
          priority?: Database["public"]["Enums"]["task_priority"]
          status?: Database["public"]["Enums"]["task_status"]
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "river_tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "river_authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "river_tasks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "river_authors"
            referencedColumns: ["id"]
          },
        ]
      }
      social_activities: {
        Row: {
          activity_type: string
          content: Json | null
          created_at: string
          id: string
          is_public: boolean | null
          journal_entry_id: string | null
          user_id: string
          wine_id: string | null
          wine_list_id: string | null
        }
        Insert: {
          activity_type: string
          content?: Json | null
          created_at?: string
          id?: string
          is_public?: boolean | null
          journal_entry_id?: string | null
          user_id: string
          wine_id?: string | null
          wine_list_id?: string | null
        }
        Update: {
          activity_type?: string
          content?: Json | null
          created_at?: string
          id?: string
          is_public?: boolean | null
          journal_entry_id?: string | null
          user_id?: string
          wine_id?: string | null
          wine_list_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_activities_journal_entry_id_fkey"
            columns: ["journal_entry_id"]
            isOneToOne: false
            referencedRelation: "wine_journal_entries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_activities_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wine_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_activities_wine_list_id_fkey"
            columns: ["wine_list_id"]
            isOneToOne: false
            referencedRelation: "wine_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      user_connections: {
        Row: {
          created_at: string
          follower_id: string
          following_id: string
          id: string
        }
        Insert: {
          created_at?: string
          follower_id: string
          following_id: string
          id?: string
        }
        Update: {
          created_at?: string
          follower_id?: string
          following_id?: string
          id?: string
        }
        Relationships: []
      }
      wine_catalog: {
        Row: {
          abv: number | null
          country: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          price_range: string | null
          region: string | null
          updated_at: string
          vintage: number | null
          wine_type: string
          winery: string
        }
        Insert: {
          abv?: number | null
          country?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          price_range?: string | null
          region?: string | null
          updated_at?: string
          vintage?: number | null
          wine_type: string
          winery: string
        }
        Update: {
          abv?: number | null
          country?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          price_range?: string | null
          region?: string | null
          updated_at?: string
          vintage?: number | null
          wine_type?: string
          winery?: string
        }
        Relationships: []
      }
      wine_flavor_profiles: {
        Row: {
          category: string | null
          created_at: string
          flavor_tag: string
          id: string
          intensity: number | null
          wine_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          flavor_tag: string
          id?: string
          intensity?: number | null
          wine_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          flavor_tag?: string
          id?: string
          intensity?: number | null
          wine_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wine_flavor_profiles_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wine_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      wine_journal_entries: {
        Row: {
          created_at: string
          id: string
          location: string | null
          notes: string | null
          occasion: string | null
          photo_url: string | null
          rating: number | null
          tasted_at: string | null
          updated_at: string
          user_id: string
          wine_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          location?: string | null
          notes?: string | null
          occasion?: string | null
          photo_url?: string | null
          rating?: number | null
          tasted_at?: string | null
          updated_at?: string
          user_id: string
          wine_id: string
        }
        Update: {
          created_at?: string
          id?: string
          location?: string | null
          notes?: string | null
          occasion?: string | null
          photo_url?: string | null
          rating?: number | null
          tasted_at?: string | null
          updated_at?: string
          user_id?: string
          wine_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wine_journal_entries_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wine_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      wine_list_items: {
        Row: {
          added_at: string
          id: string
          notes: string | null
          wine_id: string
          wine_list_id: string
        }
        Insert: {
          added_at?: string
          id?: string
          notes?: string | null
          wine_id: string
          wine_list_id: string
        }
        Update: {
          added_at?: string
          id?: string
          notes?: string | null
          wine_id?: string
          wine_list_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wine_list_items_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wine_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wine_list_items_wine_list_id_fkey"
            columns: ["wine_list_id"]
            isOneToOne: false
            referencedRelation: "wine_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      wine_lists: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_public: boolean
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wine_recommendations: {
        Row: {
          algorithm_version: string | null
          generated_at: string
          id: string
          match_score: number
          user_id: string
          wine_id: string
        }
        Insert: {
          algorithm_version?: string | null
          generated_at?: string
          id?: string
          match_score: number
          user_id: string
          wine_id: string
        }
        Update: {
          algorithm_version?: string | null
          generated_at?: string
          id?: string
          match_score?: number
          user_id?: string
          wine_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wine_recommendations_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wine_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      wine_restaurant_lists: {
        Row: {
          availability: boolean | null
          id: string
          location: string | null
          price: number | null
          restaurant_name: string
          scanned_at: string
          wine_id: string | null
          wine_name: string
        }
        Insert: {
          availability?: boolean | null
          id?: string
          location?: string | null
          price?: number | null
          restaurant_name: string
          scanned_at?: string
          wine_id?: string | null
          wine_name: string
        }
        Update: {
          availability?: boolean | null
          id?: string
          location?: string | null
          price?: number | null
          restaurant_name?: string
          scanned_at?: string
          wine_id?: string | null
          wine_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "wine_restaurant_lists_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wine_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      wine_taste_profiles: {
        Row: {
          completed_at: string
          created_at: string
          exploration_score: number
          food_pairing_score: number
          id: string
          intensity_score: number
          occasion_score: number
          sweetness_score: number
          user_id: string
        }
        Insert: {
          completed_at?: string
          created_at?: string
          exploration_score: number
          food_pairing_score: number
          id?: string
          intensity_score: number
          occasion_score: number
          sweetness_score: number
          user_id: string
        }
        Update: {
          completed_at?: string
          created_at?: string
          exploration_score?: number
          food_pairing_score?: number
          id?: string
          intensity_score?: number
          occasion_score?: number
          sweetness_score?: number
          user_id?: string
        }
        Relationships: []
      }
      wine_user_interactions: {
        Row: {
          created_at: string
          id: string
          interaction_type: string
          rating_score: number | null
          user_id: string
          wine_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          interaction_type: string
          rating_score?: number | null
          user_id: string
          wine_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interaction_type?: string
          rating_score?: number | null
          user_id?: string
          wine_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wine_user_interactions_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wine_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      wine_users: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          subscription_status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          subscription_status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          subscription_status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      apply_river_comments_grants: { Args: never; Returns: undefined }
      create_client: {
        Args: {
          client_industry: string
          client_name: string
          client_region: string
          client_status: string
          client_value: number
          notes: string
          tenant_id: string
          website_url: string
        }
        Returns: {
          created_at: string
          id: string
          industry: string | null
          last_contact: string | null
          name: string
          notes: string | null
          region: string | null
          status: string
          tenant_id: string
          thumbnail_url: string | null
          updated_at: string
          value: number | null
          website_url: string | null
        }
        SetofOptions: {
          from: "*"
          to: "crm_clients"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      crm_create_tenant: {
        Args: { tenant_name: string; user_id: string }
        Returns: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        SetofOptions: {
          from: "*"
          to: "crm_tenants"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      delete_client: { Args: { client_id: string }; Returns: boolean }
      delta_get_applicant_progress: {
        Args: { _applicant_id: string }
        Returns: {
          progress_percentage: number
          total_documents: number
          uploaded_documents: number
        }[]
      }
      delta_has_app_role: {
        Args: {
          _role: Database["public"]["Enums"]["delta_app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      get_tenant_clients: {
        Args: { p_tenant_id: string }
        Returns: {
          created_at: string
          id: string
          industry: string | null
          last_contact: string | null
          name: string
          notes: string | null
          region: string | null
          status: string
          tenant_id: string
          thumbnail_url: string | null
          updated_at: string
          value: number | null
          website_url: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "crm_clients"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_user_tenants: {
        Args: { p_user_id: string }
        Returns: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "crm_tenants"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      has_membership_role: {
        Args: {
          _role: Database["public"]["Enums"]["membership_role"]
          _user_id: string
        }
        Returns: boolean
      }
      netflix_create_client: {
        Args: {
          p_client_industry: string
          p_client_name: string
          p_client_region: string
          p_client_status: string
          p_client_value: number
          p_notes: string
          p_tenant_id: string
          p_website_url: string
        }
        Returns: {
          created_at: string
          id: string
          industry: string | null
          last_contact: string | null
          name: string
          notes: string | null
          region: string | null
          relationship_started_at: string | null
          status: string
          tenant_id: string
          thumbnail_url: string | null
          updated_at: string
          value: number | null
          website_url: string | null
        }
        SetofOptions: {
          from: "*"
          to: "netflix_crm_clients"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      netflix_crm_create_tenant: {
        Args: { tenant_name: string; user_id: string }
        Returns: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        SetofOptions: {
          from: "*"
          to: "netflix_crm_tenants"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      netflix_delete_client: { Args: { client_id: string }; Returns: boolean }
      netflix_get_tenant_clients: {
        Args: { p_tenant_id: string }
        Returns: {
          created_at: string
          id: string
          industry: string | null
          last_contact: string | null
          name: string
          notes: string | null
          region: string | null
          relationship_started_at: string | null
          status: string
          tenant_id: string
          thumbnail_url: string | null
          updated_at: string
          value: number | null
          website_url: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "netflix_crm_clients"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      netflix_get_user_tenants: {
        Args: { p_user_id: string }
        Returns: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "netflix_crm_tenants"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      netflix_update_client: {
        Args: { client_id: string; updates: Json }
        Returns: {
          created_at: string
          id: string
          industry: string | null
          last_contact: string | null
          name: string
          notes: string | null
          region: string | null
          relationship_started_at: string | null
          status: string
          tenant_id: string
          thumbnail_url: string | null
          updated_at: string
          value: number | null
          website_url: string | null
        }
        SetofOptions: {
          from: "*"
          to: "netflix_crm_clients"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      parts_find_substitutes: {
        Args: { p_part_id: string }
        Returns: {
          compatibility_score: number
          notes: string
          oem_name: string
          part_number: string
          substitute_id: string
        }[]
      }
      parts_record_search: {
        Args: {
          p_oem_name: string
          p_part_number: string
          p_results_count: number
          p_user_id: string
        }
        Returns: undefined
      }
      parts_search_market_pricing: {
        Args: {
          p_oem_name: string
          p_part_number: string
          p_preferred_region?: string
        }
        Returns: {
          availability_type: string
          available_regions: Json
          currency: string
          last_updated: string
          oem_name: string
          part_id: string
          part_number: string
          price: number
          source_url: string
          supplier_name: string
          supplier_region: string
          supplier_website: string
        }[]
      }
      river_admin_count: { Args: never; Returns: number }
      river_has_role: {
        Args: { role_to_check: Database["public"]["Enums"]["river_role"] }
        Returns: boolean
      }
      river_is_staff: { Args: never; Returns: boolean }
      update_client: {
        Args: { client_id: string; updates: Json }
        Returns: {
          created_at: string
          id: string
          industry: string | null
          last_contact: string | null
          name: string
          notes: string | null
          region: string | null
          status: string
          tenant_id: string
          thumbnail_url: string | null
          updated_at: string
          value: number | null
          website_url: string | null
        }
        SetofOptions: {
          from: "*"
          to: "crm_clients"
          isOneToOne: true
          isSetofReturn: false
        }
      }
    }
    Enums: {
      delta_app_role: "admin" | "applicant"
      membership_role: "member" | "founding_member" | "admin"
      river_content_format: "markdown" | "html"
      river_post_status: "draft" | "published" | "archived"
      river_role: "admin" | "editor"
      task_priority: "low" | "medium" | "high" | "urgent"
      task_status:
        | "backlog"
        | "todo"
        | "in_progress"
        | "review"
        | "completed"
        | "blocked"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      delta_app_role: ["admin", "applicant"],
      membership_role: ["member", "founding_member", "admin"],
      river_content_format: ["markdown", "html"],
      river_post_status: ["draft", "published", "archived"],
      river_role: ["admin", "editor"],
      task_priority: ["low", "medium", "high", "urgent"],
      task_status: [
        "backlog",
        "todo",
        "in_progress",
        "review",
        "completed",
        "blocked",
      ],
    },
  },
} as const
