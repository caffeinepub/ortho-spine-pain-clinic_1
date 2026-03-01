import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ClinicInfo {
    about: string;
    tagline: string;
    name: string;
    instagramUrl: string;
    googleMapsUrl: string;
    experienceYears: bigint;
    address: string;
    specialization: string;
    doctorName: string;
    contactNumbers: Array<string>;
}
export interface Service {
    name: string;
    description: string;
    iconName: string;
}
export interface BusinessHour {
    day: string;
    time: string;
}
export interface Testimonial {
    review: string;
    date: string;
    patientName: string;
    rating: bigint;
}
export interface backendInterface {
    getBusinessHours(): Promise<Array<BusinessHour>>;
    getClinicInfo(): Promise<ClinicInfo>;
    getServices(): Promise<Array<Service>>;
    getTestimonials(): Promise<Array<Testimonial>>;
}
