import Script from "next/script";
import { profile } from "@/data/resume";

export function LinkedInBadge() {
  return (
    <>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
      />
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity={profile.linkedinVanity}
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href={`https://pk.linkedin.com/in/${profile.linkedinVanity}?trk=profile-badge`}
        />
      </div>
    </>
  );
}
