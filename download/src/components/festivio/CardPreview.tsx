'use client';
import React from 'react';
import type { CardTemplateProps } from './templates/types';
import { ClassicTemplate } from './templates/ClassicTemplate';

export const CardPreview = React.forwardRef<HTMLDivElement, CardTemplateProps>(
  (props, ref) => {
    return (
      <div className="flex flex-col items-center">
        <div
          ref={ref}
          className="bg-card shadow-2xl overflow-hidden rounded-lg transition-all duration-300 ease-in-out"
          style={{
            width: '3087px',
            height: '2638px',
          }}
        >
          <ClassicTemplate {...props} />
        </div>
      </div>
    );
  }
);

CardPreview.displayName = 'CardPreview';
