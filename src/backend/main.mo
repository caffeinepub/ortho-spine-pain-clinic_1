import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  // 1. Clinic Info
  type ClinicInfo = {
    name : Text;
    tagline : Text;
    doctorName : Text;
    specialization : Text;
    about : Text;
    experienceYears : Nat;
    contactNumbers : [Text];
    address : Text;
    instagramUrl : Text;
    googleMapsUrl : Text;
  };

  // 2. Service
  type Service = {
    name : Text;
    description : Text;
    iconName : Text;
  };

  module Service {
    public func compare(service1 : Service, service2 : Service) : Order.Order {
      Runtime.trap("Service array is already sorted!");
    };
  };

  // 3. Testimonial
  type Testimonial = {
    patientName : Text;
    review : Text;
    rating : Nat;
    date : Text;
  };

  module Testimonial {
    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Runtime.trap("Testimonial array is already sorted!");
    };
  };

  // 4. Business Hour
  type BusinessHour = {
    day : Text;
    time : Text;
  };

  module BusinessHour {
    public func compare(businessHour1 : BusinessHour, businessHour2 : BusinessHour) : Order.Order {
      Runtime.trap("BusinessHour array is already sorted!");
    };
  };

  // Seed Data
  let clinicInfo : ClinicInfo = {
    name = "ORTHO-SPINE PAIN CLINIC";
    tagline = "Bringing Motion to Life";
    doctorName = "Dr. M.Chaitanya";
    specialization = "Consultant Neuro Spine Orthopaedic & Pain Specialist";
    about = "One of the very few spine specialists in the country practicing endoscopic spine & pain management techniques for back & neck pain. Successfully treated more than 10,000 patients for various spine and pain disorders. Expert in minimally invasive procedures, endoscopy, and pain management techniques.";
    experienceYears = 11;
    contactNumbers = ["+91 93461 79600"];
    address = "#110-154/A, Bhargavi Apartments, Bhargavi Nagar, 1st Road, Opp Infosys, Manikonda, Hyderabad-500 089";
    instagramUrl = "https://www.instagram.com/orthospineofficial";
    googleMapsUrl = "https://www.google.com/maps/search/ortho+spine+clinic+manikonda";
  };

  let services = [
    {
      name = "Endoscopic Spine Surgery";
      description = "Minimally invasive surgery for slipped discs";
      iconName = "back";
    },
    {
      name = "Pain Management";
      description = "Advanced treatments for joint, back, and neck pain";
      iconName = "pain";
    },
    {
      name = "Sports Injury Rehabilitation";
      description = "Expert care for sports-related injuries";
      iconName = "sports";
    },
    {
      name = "Orthopedic Consultation";
      description = "Comprehensive ortho and neuro spine care";
      iconName = "orthopedic";
    },
    {
      name = "Physiotherapy";
      description = "Customized physiotherapy plans";
      iconName = "physiotherapy";
    },
  ];

  let testimonials = [
    {
      patientName = "Krishna S";
      review = "Doctor is patient friendly. Does not prescribe unnecessary tests. Suggests minimally invasive procedures. Highly skilled and gives detailed feedback. Highly recommended for ortho and neuro-related issues.";
      rating = 5;
      date = "2024-02-15";
    },
    {
      patientName = "Sandhya Reddy";
      review = "Absolutely appreciate the treatment provided at Ortho Spine Clinic. Dr. Chaitanya and team have been instrumental in my recovery. Highly recommended clinic.";
      rating = 5;
      date = "2024-03-10";
    },
    {
      patientName = "Sandeep Lanka";
      review = "The hospital's staff was courteous and professional. My condition was diagnosed and adequately treated without unnecessary pills. Thank you so much, Chaitu and team!";
      rating = 5;
      date = "2023-11-28";
    },
    {
      patientName = "Abhinay";
      review = "Thanks to Dr. Chaitanya's thorough approach, received the correct diagnosis and treatment plan. Highly recommend Ortho Spine Clinic.";
      rating = 5;
      date = "2024-01-20";
    },
  ];

  let businessHours = [
    { day = "Monday - Friday"; time = "6:00 PM - 8:30 PM" },
    { day = "Saturday"; time = "10:00 AM - 01:00 PM" },
    { day = "Sunday"; time = "10:00 AM - 01:00 PM" },
  ];

  // Public API
  public query ({ caller }) func getClinicInfo() : async ClinicInfo {
    clinicInfo;
  };

  public query ({ caller }) func getServices() : async [Service] {
    services;
  };

  public query ({ caller }) func getTestimonials() : async [Testimonial] {
    testimonials;
  };

  public query ({ caller }) func getBusinessHours() : async [BusinessHour] {
    businessHours;
  };
};
