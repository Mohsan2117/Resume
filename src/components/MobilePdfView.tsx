import { Icon } from "@/components/icons";
import { profile } from "@/data/resume";

export function MobilePdfView() {
  return (
    <div className="mobile-view">
      <div className="mobile-pdf-header">
        <span className="header-title">Mohsan Iqbal Resume</span>
        <a href={profile.pdf} download className="download-btn">
          <Icon name="download" />
          Download
        </a>
      </div>
      <iframe
        src={`${profile.pdf}#view=FitH&scrollbar=0&toolbar=0&navpanes=0`}
        title="Mohsan Iqbal Resume"
      />
    </div>
  );
}
