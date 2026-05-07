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

const CL_IMG = "https://res.cloudinary.com/daeio5gbf/image/upload";
const VID_BASE = "https://res.cloudinary.com/daeio5gbf/video/upload";

const clImg = (version: string, path: string) => `${CL_IMG}/v${version}/skills/${path}`;

export const skillCategories: SkillCategory[] = [
  {
    "id": "ai-videos",
    "label": "AI Videos",
    "folder": "Skills/AIVIDEOS",
    "media_type": "video",
    "display_style": "fullscreen_reel",
    "badge_color": "#7c3aed",
    "badge_text": "AI Generated",
    "description": "AI-powered video content crafted with next-gen tools — motion, narrative, and aesthetics combined.",
    "videos": [
      {
        "src": "/Skills/AIVIDEOS/Landscape/1.mp4",
        "thumbnail": "",
        "priority": 1
      },
      {
        "src": "/Skills/AIVIDEOS/Landscape/4.mp4",
        "thumbnail": "",
        "priority": 2
      }
    ],
    "thumbnail": `${VID_BASE}/c_fill,h_400,w_600/v1777787883/skills/AI%20VIDEOS/Advertisements%28Realistic%20Product%20Advertisement%29-keep%20this%20at%20top/3.jpg`
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
      clImg("1777788557", "Carousel/A1.jpg"),
      clImg("1777788561", "Carousel/A2.jpg"),
      clImg("1777788576", "Carousel/AA-1.jpg"),
      clImg("1777788591", "Carousel/AA-2.jpg"),
      clImg("1778095643", "Carousel/AA-3.jpg"),
      clImg("1777788624", "Carousel/AA-4.jpg"),
      clImg("1777788625", "Carousel/B-1.jpg"),
      clImg("1777788627", "Carousel/B-2.jpg"),
      clImg("1777788632", "Carousel/C-1.jpg"),
      clImg("1777788640", "Carousel/C-2.jpg"),
      clImg("1777788646", "Carousel/C-3.jpg"),
      clImg("1777788652", "Carousel/C-4.jpg"),
    ],
    "thumbnail": clImg("1777788557", "Carousel/A1.jpg")
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
        "thumbnail": "",
        "priority": 1
      },
      {
        "src": "/Skills/EDITS/Advertisement videos/2.mp4",
        "thumbnail": "",
        "priority": 2
      }
    ],
    "thumbnail": ""
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
    "images": [],
    "thumbnail": ""
  },
  {
    "id": "post-designs",
    "label": "Post Designs",
    "folder": "Skills/PostDesigns",
    "media_type": "image_carousel",
    "display_style": "masonry_grid",
    "badge_color": "#ec4899",
    "badge_text": "Social Media",
    "description": "Scroll-stopping social media posts for Instagram, LinkedIn, and beyond — bold, minimal, impactful.",
    "images": [
      clImg("1777790980", "PostDesigns/1.jpg"),
      clImg("1777790982", "PostDesigns/2.jpg"),
      clImg("1777790985", "PostDesigns/3.jpg"),
      clImg("1777790991", "PostDesigns/4.png"),
      clImg("1777791040", "PostDesigns/5.png"),
      clImg("1777791043", "PostDesigns/6.jpg"),
      clImg("1778092736", "PostDesigns/7.jpg"),
      clImg("1778092738", "PostDesigns/8.jpg"),
      clImg("1778092749", "PostDesigns/9.jpg"),
      clImg("1777791103", "PostDesigns/merch-1.png"),
      clImg("1777791118", "PostDesigns/merch-2.png")
    ],
    "thumbnail": clImg("1777790980", "PostDesigns/1.jpg")
  }
];
