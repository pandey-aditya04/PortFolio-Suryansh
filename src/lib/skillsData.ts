export interface SkillCategory {
  id: string;
  label: string;
  folder: string;
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
    "id": "ai-videos",
    "label": "AI Videos",
    "folder": "Skills/AI VIDEOS",
    "media_type": "video",
    "display_style": "fullscreen_reel",
    "badge_color": "#7c3aed",
    "badge_text": "AI Generated",
    "description": "AI-powered video content crafted with next-gen tools — motion, narrative, and aesthetics combined.",
    "videos": [
      {
        "src": "/Skills/AI VIDEOS/1.mp4",
        "thumbnail": "/Skills/AI VIDEOS/1.jpg",
        "priority": 1
      },
      {
        "src": "/Skills/AI VIDEOS/4.mp4",
        "thumbnail": "/Skills/AI VIDEOS/4.jpg",
        "priority": 2
      }
    ],
    "thumbnail": "/Skills/AI VIDEOS/1.jpg"
  },
  {
    "id": "carousel",
    "label": "Carousel Designs",
    "folder": "Skills/Carousel",
    "media_type": "image_carousel",
    "display_style": "3d_carousel",
    "badge_color": "#0ea5e9",
    "badge_text": "Instagram Carousel",
    "description": "Swipeable multi-slide carousels built for engagement, storytelling, and maximum scroll-stop power.",
    "images": [
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788557/skills/Carousel/A1.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788561/skills/Carousel/A2.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788576/skills/Carousel/AA-1.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788591/skills/Carousel/AA-2.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788624/skills/Carousel/AA-4.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788625/skills/Carousel/B-1.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788627/skills/Carousel/B-2.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788632/skills/Carousel/C-1.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788640/skills/Carousel/C-2.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788646/skills/Carousel/C-3.jpg",
      "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788652/skills/Carousel/C-4.jpg",
      "/Skills/Carousel/AA-3.jpg"
    ],
    "thumbnail": "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788557/skills/Carousel/A1.jpg"
  },
  {
    "id": "edits",
    "label": "Advertisement Edits",
    "folder": "Skills/EDITS/Advertisement videos",
    "media_type": "video",
    "display_style": "fullscreen_reel",
    "badge_color": "#f59e0b",
    "badge_text": "Professional Edits",
    "description": "High-impact video editing and creative compositing that command attention.",
    "videos": [
      {
        "src": "/Skills/EDITS/Advertisement videos/1.mp4",
        "thumbnail": "/Skills/EDITS/Advertisement videos/1.jpg",
        "priority": 1
      },
      {
        "src": "/Skills/EDITS/Advertisement videos/2.mp4",
        "thumbnail": "/Skills/EDITS/Advertisement videos/2.jpg",
        "priority": 2
      }
    ],
    "thumbnail": "/Skills/EDITS/Advertisement videos/1.jpg"
  },
  {
    "id": "menu",
    "label": "Menu Design",
    "folder": "Skills/Menu",
    "media_type": "image_carousel",
    "display_style": "mockup_spread",
    "badge_color": "#10b981",
    "badge_text": "Print & Digital",
    "description": "Restaurant and cafe menus designed to elevate brand identity and drive customer appetite.",
    "images": [
      "/Skills/Menu/PAGE 1.png",
      "/Skills/Menu/PAGE 10.png",
      "/Skills/Menu/PAGE 11.png",
      "/Skills/Menu/PAGE 12.png",
      "/Skills/Menu/PAGE 2.png",
      "/Skills/Menu/PAGE 3.png",
      "/Skills/Menu/PAGE 4.png",
      "/Skills/Menu/PAGE 5.png",
      "/Skills/Menu/PAGE 6.png",
      "/Skills/Menu/PAGE 7.png",
      "/Skills/Menu/PAGE 8.png",
      "/Skills/Menu/PAGE 9.png"
    ],
    "thumbnail": "/Skills/Menu/PAGE 1.png"
  },
  {
    "id": "post-designs",
    "label": "Post Designs",
    "folder": "Skills/Post designs",
    "media_type": "image_carousel",
    "display_style": "masonry_grid",
    "badge_color": "#ec4899",
    "badge_text": "Social Media",
    "description": "Scroll-stopping social media posts for Instagram, LinkedIn, and beyond — bold, minimal, impactful.",
    "images": [
      "/Skills/Post designs/1.jpg",
      "/Skills/Post designs/2.jpg",
      "/Skills/Post designs/3.jpg",
      "/Skills/Post designs/4.png",
      "/Skills/Post designs/5.png",
      "/Skills/Post designs/6.jpg",
      "/Skills/Post designs/7.jpg",
      "/Skills/Post designs/8.jpg",
      "/Skills/Post designs/9.jpg",
      "/Skills/Post designs/merch-1.png",
      "/Skills/Post designs/merch-2.png"
    ],
    "thumbnail": "/Skills/Post designs/1.jpg"
  }
];
