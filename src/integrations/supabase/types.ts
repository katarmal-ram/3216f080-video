export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          project_id: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          project_id?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          project_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_submissions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      deployed_sites: {
        Row: {
          aliases: string[] | null
          automatic_aliases: string[] | null
          build_logs: string | null
          created_at: string
          custom_subdomain: string | null
          deployment_error: string | null
          deployment_id: string | null
          deployment_status: string | null
          github_repo_url: string | null
          id: string
          last_deployed_at: string | null
          project_id: string
          project_vercel_id: string | null
          updated_at: string
          variant: string
          vercel_deployment_id: string | null
          vercel_project_id: string | null
          vercel_url: string | null
        }
        Insert: {
          aliases?: string[] | null
          automatic_aliases?: string[] | null
          build_logs?: string | null
          created_at?: string
          custom_subdomain?: string | null
          deployment_error?: string | null
          deployment_id?: string | null
          deployment_status?: string | null
          github_repo_url?: string | null
          id?: string
          last_deployed_at?: string | null
          project_id: string
          project_vercel_id?: string | null
          updated_at?: string
          variant: string
          vercel_deployment_id?: string | null
          vercel_project_id?: string | null
          vercel_url?: string | null
        }
        Update: {
          aliases?: string[] | null
          automatic_aliases?: string[] | null
          build_logs?: string | null
          created_at?: string
          custom_subdomain?: string | null
          deployment_error?: string | null
          deployment_id?: string | null
          deployment_status?: string | null
          github_repo_url?: string | null
          id?: string
          last_deployed_at?: string | null
          project_id?: string
          project_vercel_id?: string | null
          updated_at?: string
          variant?: string
          vercel_deployment_id?: string | null
          vercel_project_id?: string | null
          vercel_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deployed_sites_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      final_sites: {
        Row: {
          admin_approved: boolean | null
          admin_notes: string | null
          admin_response: string | null
          approved_at: string | null
          created_at: string
          customization_details: string | null
          customization_requested: boolean | null
          customization_requested_at: string | null
          customization_status: string | null
          deployed_site_id: string | null
          id: string
          project_id: string
          selected_at: string | null
          updated_at: string
          user_id: string
          user_media_files: Json | null
          user_selection_reason: string | null
          variant: string
        }
        Insert: {
          admin_approved?: boolean | null
          admin_notes?: string | null
          admin_response?: string | null
          approved_at?: string | null
          created_at?: string
          customization_details?: string | null
          customization_requested?: boolean | null
          customization_requested_at?: string | null
          customization_status?: string | null
          deployed_site_id?: string | null
          id?: string
          project_id: string
          selected_at?: string | null
          updated_at?: string
          user_id: string
          user_media_files?: Json | null
          user_selection_reason?: string | null
          variant: string
        }
        Update: {
          admin_approved?: boolean | null
          admin_notes?: string | null
          admin_response?: string | null
          approved_at?: string | null
          created_at?: string
          customization_details?: string | null
          customization_requested?: boolean | null
          customization_requested_at?: string | null
          customization_status?: string | null
          deployed_site_id?: string | null
          id?: string
          project_id?: string
          selected_at?: string | null
          updated_at?: string
          user_id?: string
          user_media_files?: Json | null
          user_selection_reason?: string | null
          variant?: string
        }
        Relationships: [
          {
            foreignKeyName: "final_sites_deployed_site_id_fkey"
            columns: ["deployed_site_id"]
            isOneToOne: false
            referencedRelation: "deployed_sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "final_sites_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          about_content: Json | null
          additional_details: string | null
          additional_features: string[] | null
          auto_retry_count: number | null
          business_description: string
          business_name: string
          business_type: string
          config_content: Json | null
          contact_content: Json | null
          created_at: string | null
          current_step: string | null
          custom_images: string[] | null
          custom_videos: string[] | null
          deployment_error_details: string | null
          deployment_status: string | null
          deployment_url_carousel: string | null
          deployment_url_split: string | null
          deployment_url_video: string | null
          deployment_urls: Json | null
          error_message: string | null
          generation_completed_at: string | null
          generation_cooldown_expires_at: string | null
          generation_errors: Json | null
          generation_job_id: string | null
          generation_started_at: string | null
          github_repo_url: string | null
          hero_variant_1: Json | null
          hero_variant_2: Json | null
          hero_variant_3: Json | null
          id: string
          last_generation_attempt: string | null
          last_retry_at: string | null
          max_retries: number | null
          media_files: Json | null
          products: string | null
          products_content: Json | null
          project_name: string
          project_status_check: string | null
          retry_count: number | null
          services: string | null
          services_content: Json | null
          status: string | null
          step_progress: Json | null
          updated_at: string | null
          user_id: string | null
          years_of_experience: string | null
        }
        Insert: {
          about_content?: Json | null
          additional_details?: string | null
          additional_features?: string[] | null
          auto_retry_count?: number | null
          business_description: string
          business_name: string
          business_type: string
          config_content?: Json | null
          contact_content?: Json | null
          created_at?: string | null
          current_step?: string | null
          custom_images?: string[] | null
          custom_videos?: string[] | null
          deployment_error_details?: string | null
          deployment_status?: string | null
          deployment_url_carousel?: string | null
          deployment_url_split?: string | null
          deployment_url_video?: string | null
          deployment_urls?: Json | null
          error_message?: string | null
          generation_completed_at?: string | null
          generation_cooldown_expires_at?: string | null
          generation_errors?: Json | null
          generation_job_id?: string | null
          generation_started_at?: string | null
          github_repo_url?: string | null
          hero_variant_1?: Json | null
          hero_variant_2?: Json | null
          hero_variant_3?: Json | null
          id?: string
          last_generation_attempt?: string | null
          last_retry_at?: string | null
          max_retries?: number | null
          media_files?: Json | null
          products?: string | null
          products_content?: Json | null
          project_name: string
          project_status_check?: string | null
          retry_count?: number | null
          services?: string | null
          services_content?: Json | null
          status?: string | null
          step_progress?: Json | null
          updated_at?: string | null
          user_id?: string | null
          years_of_experience?: string | null
        }
        Update: {
          about_content?: Json | null
          additional_details?: string | null
          additional_features?: string[] | null
          auto_retry_count?: number | null
          business_description?: string
          business_name?: string
          business_type?: string
          config_content?: Json | null
          contact_content?: Json | null
          created_at?: string | null
          current_step?: string | null
          custom_images?: string[] | null
          custom_videos?: string[] | null
          deployment_error_details?: string | null
          deployment_status?: string | null
          deployment_url_carousel?: string | null
          deployment_url_split?: string | null
          deployment_url_video?: string | null
          deployment_urls?: Json | null
          error_message?: string | null
          generation_completed_at?: string | null
          generation_cooldown_expires_at?: string | null
          generation_errors?: Json | null
          generation_job_id?: string | null
          generation_started_at?: string | null
          github_repo_url?: string | null
          hero_variant_1?: Json | null
          hero_variant_2?: Json | null
          hero_variant_3?: Json | null
          id?: string
          last_generation_attempt?: string | null
          last_retry_at?: string | null
          max_retries?: number | null
          media_files?: Json | null
          products?: string | null
          products_content?: Json | null
          project_name?: string
          project_status_check?: string | null
          retry_count?: number | null
          services?: string | null
          services_content?: Json | null
          status?: string | null
          step_progress?: Json | null
          updated_at?: string | null
          user_id?: string | null
          years_of_experience?: string | null
        }
        Relationships: []
      }
      templates: {
        Row: {
          about: Json | null
          additional1: Json | null
          additional2: Json | null
          additional3: Json | null
          additional4: Json | null
          config: Json | null
          contact: Json | null
          created_at: string | null
          home: Json | null
          id: number
          products: Json | null
          "repo link": string | null
          repo_link: string | null
          services: Json | null
          "template name": string | null
        }
        Insert: {
          about?: Json | null
          additional1?: Json | null
          additional2?: Json | null
          additional3?: Json | null
          additional4?: Json | null
          config?: Json | null
          contact?: Json | null
          created_at?: string | null
          home?: Json | null
          id?: number
          products?: Json | null
          "repo link"?: string | null
          repo_link?: string | null
          services?: Json | null
          "template name"?: string | null
        }
        Update: {
          about?: Json | null
          additional1?: Json | null
          additional2?: Json | null
          additional3?: Json | null
          additional4?: Json | null
          config?: Json | null
          contact?: Json | null
          created_at?: string | null
          home?: Json | null
          id?: number
          products?: Json | null
          "repo link"?: string | null
          repo_link?: string | null
          services?: Json | null
          "template name"?: string | null
        }
        Relationships: []
      }
      website_templates: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          section_type: string
          template_structure: Json
          updated_at: string
          variant: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          section_type: string
          template_structure: Json
          updated_at?: string
          variant: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          section_type?: string
          template_structure?: Json
          updated_at?: string
          variant?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
