import ResumeViewer from '@/components/ResumeViewer';

export const metadata = {
  title: 'Resume - Shane Paton',
  description: 'Download Shane Paton\'s resume or view it online.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <div className="section-padding">
        <div className="container-max-width">
          <ResumeViewer />
        </div>
      </div>
    </div>
  );
}
