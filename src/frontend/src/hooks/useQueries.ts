import { useQuery } from "@tanstack/react-query";
import type {
  BusinessHour,
  ClinicInfo,
  Service,
  Testimonial,
} from "../backend.d";

// Fallback data
const FALLBACK_CLINIC_INFO: ClinicInfo = {
  name: "ORTHO-SPINE PAIN CLINIC",
  tagline:
    "Expert Physiotherapy Care for a Pain-Free Life — Your Recovery Is Our Mission",
  doctorName: "Dr. Arbaz Shaikh",
  specialization: "Consultant Physiotherapist",
  experienceYears: BigInt(8),
  about:
    "Dr. Arbaz Shaikh is a highly qualified and experienced Consultant Physiotherapist dedicated to providing comprehensive physiotherapy care. With over 8 years of clinical experience, he specializes in diagnosing and treating musculoskeletal disorders, spine conditions, sports injuries, and neurological conditions. His patient-centric approach combined with advanced physiotherapy techniques ensures effective recovery and long-term wellness.",
  address:
    "Mez floor, Swastik chambers, Athugar Street, opp. Kailash Sweets, Nanpura Timalyawad, Surat",
  contactNumbers: ["8401282296", "6351002510"],
  instagramUrl:
    "https://www.instagram.com/ortho_spine.pain_clinic?igsh=NHh2MWcwcHM0aGQx",
  googleMapsUrl: "https://maps.app.goo.gl/2dbsJBFvPj29VffY7",
};

const FALLBACK_SERVICES: Service[] = [
  {
    name: "Back Pain Treatment",
    description:
      "Comprehensive treatment for acute and chronic back pain using manual therapy, exercises, and advanced modalities for lasting relief.",
    iconName: "spine",
  },
  {
    name: "Neck Pain & Cervical",
    description:
      "Targeted cervical spine therapy addressing stiffness, radiculopathy, and posture-related neck pain with personalized protocols.",
    iconName: "neck",
  },
  {
    name: "Sports Injury Rehab",
    description:
      "Evidence-based sports rehabilitation programs to help athletes recover from injuries and return to peak performance.",
    iconName: "sports",
  },
  {
    name: "Post-Surgical Rehab",
    description:
      "Structured post-operative physiotherapy protocols after orthopedic surgeries for optimal recovery and functional restoration.",
    iconName: "surgery",
  },
  {
    name: "Knee Pain Management",
    description:
      "Specialized care for knee osteoarthritis, ligament injuries, and post-replacement rehab with targeted strengthening programs.",
    iconName: "knee",
  },
  {
    name: "Shoulder Disorders",
    description:
      "Treatment for frozen shoulder, rotator cuff injuries, and shoulder impingement using manual therapy and therapeutic exercises.",
    iconName: "shoulder",
  },
  {
    name: "Sciatica & Disc Problems",
    description:
      "Advanced treatment for sciatica, herniated discs, and nerve compression using traction therapy and specific rehabilitation techniques.",
    iconName: "nerve",
  },
  {
    name: "Electrotherapy",
    description:
      "State-of-the-art electrotherapy modalities including TENS, ultrasound, IFT, and laser therapy for accelerated healing.",
    iconName: "electric",
  },
  {
    name: "Dry Needling",
    description:
      "Precision dry needling therapy for myofascial trigger points, muscle tightness, and chronic pain management.",
    iconName: "needle",
  },
  {
    name: "Neurological Physiotherapy",
    description:
      "Specialized rehabilitation for stroke, Parkinson's disease, and other neurological conditions to restore movement and independence.",
    iconName: "brain",
  },
  {
    name: "Postural Correction",
    description:
      "Comprehensive postural assessment and correction programs addressing modern lifestyle-related posture problems and associated pain.",
    iconName: "posture",
  },
  {
    name: "Pediatric Physiotherapy",
    description:
      "Gentle and effective physiotherapy for children with developmental delays, cerebral palsy, and musculoskeletal conditions.",
    iconName: "child",
  },
  {
    name: "Geriatric Physiotherapy",
    description:
      "Specialized physiotherapy for elderly patients focusing on fall prevention, strength training, and improving quality of life.",
    iconName: "elderly",
  },
  {
    name: "Manual Therapy",
    description:
      "Hands-on therapeutic techniques including joint mobilization, soft tissue mobilization, and manipulation for pain relief.",
    iconName: "hands",
  },
  {
    name: "Cupping Therapy",
    description:
      "Traditional cupping therapy combined with modern physiotherapy for muscle relaxation, improved circulation, and pain relief.",
    iconName: "cup",
  },
  {
    name: "Home Visit Physiotherapy",
    description:
      "Professional physiotherapy services at your home for patients with mobility limitations or those who prefer at-home treatment.",
    iconName: "home",
  },
];

const FALLBACK_BUSINESS_HOURS: BusinessHour[] = [
  { day: "Monday", time: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 8:00 PM" },
  { day: "Thursday", time: "9:00 AM – 8:00 PM" },
  { day: "Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "10:00 AM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    patientName: "Suresh Patel",
    review:
      "Dr. Arbaz Shaikh is truly exceptional. I came with severe back pain that was affecting my daily life. After just 3 weeks of treatment, I am 90% better. The clinic is well-equipped and the doctor's diagnosis was spot-on. Highly recommended!",
    rating: BigInt(5),
    date: "February 2025",
  },
  {
    patientName: "Priya Mehta",
    review:
      "Suffered from frozen shoulder for months. After physiotherapy sessions at ORTHO-SPINE PAIN CLINIC, my shoulder mobility has improved dramatically. Dr. Arbaz explains each treatment step clearly and is very professional.",
    rating: BigInt(5),
    date: "January 2025",
  },
  {
    patientName: "Ramesh Desai",
    review:
      "Post knee replacement rehabilitation was done perfectly here. The personalized exercise program helped me recover faster than expected. The clinic has modern equipment and a caring environment.",
    rating: BigInt(5),
    date: "December 2024",
  },
  {
    patientName: "Anjali Shah",
    review:
      "My sciatica pain was unbearable before I visited this clinic. Dr. Arbaz's treatment plan with electrotherapy and manual therapy gave me significant relief. Very knowledgeable doctor with excellent bedside manner.",
    rating: BigInt(5),
    date: "November 2024",
  },
  {
    patientName: "Vikram Joshi",
    review:
      "Sports injury rehab done brilliantly! I'm a cricket player and had a shoulder injury. Dr. Arbaz's sports rehab program got me back on the field in record time. The best physiotherapist in Surat!",
    rating: BigInt(5),
    date: "October 2024",
  },
  {
    patientName: "Meena Agarwal",
    review:
      "Excellent treatment for my cervical spondylosis. The traction therapy and exercises prescribed by Dr. Arbaz have completely resolved my neck pain and radiating arm tingling. Thank you for giving me my life back!",
    rating: BigInt(4),
    date: "September 2024",
  },
];

export function useClinicInfo() {
  return useQuery<ClinicInfo>({
    queryKey: ["clinicInfo"],
    queryFn: async () => FALLBACK_CLINIC_INFO,
    placeholderData: FALLBACK_CLINIC_INFO,
  });
}

export function useServices() {
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => FALLBACK_SERVICES,
    placeholderData: FALLBACK_SERVICES,
  });
}

export function useBusinessHours() {
  return useQuery<BusinessHour[]>({
    queryKey: ["businessHours"],
    queryFn: async () => FALLBACK_BUSINESS_HOURS,
    placeholderData: FALLBACK_BUSINESS_HOURS,
  });
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => FALLBACK_TESTIMONIALS,
    placeholderData: FALLBACK_TESTIMONIALS,
  });
}
