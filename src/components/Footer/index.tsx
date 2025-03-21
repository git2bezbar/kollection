'use client';

export interface FooterProps {
  viewMode: string;
  changeViewMode: (viewMode: 'stacked' | 'grid') => void;
  artistName: string;
  albumTitle: string;
}

export default function Footer ({
  viewMode,
  changeViewMode,
  artistName,
  albumTitle,
}: FooterProps) {

  return (
    <div
      className={'flex flex-col gap-4 items-center justify-center p-8 ' +
        'pb-16 absolute bottom-0 left-0 right-0'}
    >
      <span className="text-2xl">{ albumTitle }</span>
      <p>{ artistName }</p>
      <div className="flex justify-center items-start gap-12">
        <a
          href="#"
          className={viewMode === 'stacked' ? 'active-link' : ''}
          onClick={() => changeViewMode('stacked')}
        >
          Stacked
        </a>
        <a
          href="#"
          className={viewMode === 'grid' ? 'active-link' : ''}
          onClick={() => changeViewMode('grid')}
        >
          Grid
        </a>
      </div>
    </div>
  );
}
