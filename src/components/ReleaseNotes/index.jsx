import React from 'react';
import clsx from 'clsx';
import './custom.css';

export const useMediaQuery = (query) => {
  const mediaMatch = typeof window !== 'undefined' && window.matchMedia(query);
  const [matches, setMatches] = React.useState(mediaMatch.matches);

  React.useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.onchange = handler;
    return () => (mediaMatch.onchange = null);
  }, []);
  return matches;
};

const ReleaseNotes = ({ children }) => {
  return <div className="release-notes">{children}</div>;
};

const Item = ({ children, width }) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <div className={clsx("release-notes-item", { "flex-1": !width })} style={isMobile ? {} : { width }}>
      {children}
    </div>
  );
};

const Timeline = ({ children }) => {
  return <div className="release-notes-timeline"><div>{children}</div></div>;
};

const Meta = ({ children }) => {
  return <div className="release-notes-meta">{children}</div>;
};

const Version = ({ children }) => {
  return <div className="release-notes-version">{children}</div>;
};

const ReleaseDate = ({ children }) => {
  return <div className="release-notes-release-date">{children}</div>;
};

const Connector = () => {
  return <div className="release-notes-connector"><div></div></div>;
};

const Content = ({ children }) => {
  return <div className="release-notes-content">{children}</div>;
};

ReleaseNotes.Items = ({ children }) => {
  return <div className="release-notes-items">{children}</div>;
};

ReleaseNotes.Item = Item;
ReleaseNotes.Timeline = Timeline;
ReleaseNotes.Meta = Meta;
ReleaseNotes.Version = Version;
ReleaseNotes.ReleaseDate = ReleaseDate;
ReleaseNotes.Connector = Connector;
ReleaseNotes.Content = Content;

export default ReleaseNotes;
