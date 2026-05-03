export interface SkillCategory {
  id: string;
  label: string;
  folder: string;
  priority: number;
  badge_color: string;
  badge_text: string;
  media_type: "video" | "image_carousel";
  description: string;
  display_style: string;
  thumbnail: string;
  images?: string[];
  videos?: { src: string; thumbnail: string; priority: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-videos",
    label: "AI Videos",
    folder: "Skills/AI VIDEOS",
    priority: 1,
    badge_color: "#7c3aed",
    badge_text: "AI Generated",
    media_type: "video",
    description: "AI-powered video content crafted with next-gen tools — motion, narrative, and aesthetics combined.",
    display_style: "fullscreen_reel",
    thumbnail: "/Skills/AI VIDEOS/thumb1.jpg",
    videos: [
      { src: "/Skills/AI_Videos/video1.mp4", thumbnail: "/Skills/AI_Videos/thumb1.jpg", priority: 1 },
      { src: "/Skills/AI_Videos/video2.mp4", thumbnail: "/Skills/AI_Videos/thumb2.jpg", priority: 2 },
      { src: "/Skills/AI_Videos/video3.mp4", thumbnail: "/Skills/AI_Videos/thumb3.jpg", priority: 3 },
    ]
  },
  {
    id: "carousel",
    label: "Carousel Designs",
    folder: "Skills/Carousel",
    priority: 2,
    badge_color: "#0ea5e9",
    badge_text: "Instagram Carousel",
    media_type: "image_carousel",
    description: "Swipeable multi-slide carousels built for engagement, storytelling, and maximum scroll-stop power.",
    display_style: "3d_carousel",
    thumbnail: "/Skills/Carousel/A1.jpg",
    images: [
      "/Skills/Carousel/A1.jpg",
      "/Skills/Carousel/A2.jpg",
      "/Skills/Carousel/AA-1.jpg",
      "/Skills/Carousel/AA-2.jpg",
      "/Skills/Carousel/AA-3.jpg",
    ]
  },
  {
    id: "edits",
    label: "Photo Edits",
    folder: "Skills/EDITS",
    priority: 3,
    badge_color: "#f59e0b",
    badge_text: "Photoshop",
    media_type: "image_carousel",
    description: "High-impact photo retouching, compositing, and creative edits that command attention.",
    display_style: "before_after_slider",
    thumbnail: "/Skills/Graphic_Elements/1.jpg",
    images: [
      "/Skills/Graphic_Elements/1.jpg",
      "/Skills/Graphic_Elements/2.jpg",
      "/Skills/Graphic_Elements/3.jpg",
    ]
  },
  {
    id: "menu",
    label: "Menu Design",
    folder: "Skills/Menu",
    priority: 4,
    badge_color: "#10b981",
    badge_text: "Print & Digital",
    media_type: "image_carousel",
    description: "Restaurant and cafe menus designed to elevate brand identity and drive customer appetite.",
    display_style: "mockup_spread",
    thumbnail: "/Skills/Menu_Designs/PAGE 1.png",
    images: [
      "/Skills/Menu_Designs/PAGE 1.png",
      "/Skills/Menu_Designs/PAGE 2.png",
      "/Skills/Menu_Designs/PAGE 3.png",
    ]
  },
  {
    id: "post-designs",
    label: "Post Designs",
    folder: "Skills/Post designs",
    priority: 5,
    badge_color: "#ec4899",
    badge_text: "Social Media",
    media_type: "image_carousel",
    description: "Scroll-stopping social media posts for Instagram, LinkedIn, and beyond — bold, minimal, impactful.",
    display_style: "masonry_grid",
    thumbnail: "/Skills/Graphic_Elements/4.png",
    images: [
      "/Skills/Graphic_Elements/4.png",
      "/Skills/Graphic_Elements/5.png",
    ]
  }
];
