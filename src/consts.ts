/**
 * Single source of truth for the primary call-to-action.
 *
 * The beta currently points at TestFlight. When ARtifact ships to the
 * App Store, swap this URL (and the CTA label below) — every component and
 * page reads from these constants, so no markup needs to change.
 */
export const CTA_URL = "https://testflight.apple.com/join/BSq4JRTN";
export const CTA_LABEL = "Join the TestFlight Beta";

export const CONTACT_EMAIL = "contact@artifactar.com";

export const SITE = {
  name: "ARtifact",
  title: "ARtifact — The Museum Experience, reimagined",
  description:
    "Explore art in the MET through guided quests and immersive augmented reality. ARtifact is an iOS museum companion, now in beta.",
} as const;
