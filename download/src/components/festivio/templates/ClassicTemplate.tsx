'use client';
import Image from 'next/image';
import type { CardTemplateProps } from './types';
import { cn } from '@/lib/utils';

export function ClassicTemplate({
  message,
  image,
  imageHint,
  teacherName,
  teacherImage,
}: CardTemplateProps) {
  return (
    <div className="relative w-full min-h-[100dvh] flex items-center justify-center bg-gray-50">
      {/* Fixed background anchored to top to avoid showing the white bottom area */}
      {image && (
        <div className="fixed inset-0 -z-10">
          <Image
            src={image}
            alt={imageHint || 'Background'}
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/8" /> {/* optional overlay */}
        </div>
      )}

      {/* Foreground (card) */}
      <div className={cn('relative z-10 w-full px-6 py-10 flex justify-center text-center font-body')}>
        {teacherImage && teacherName && (
          <div className="w-full flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm border border-white/40 shadow-2xl rounded-2xl p-8 md:p-10 max-w-[95vw] md:max-w-4xl max-h-[88dvh] overflow-auto">
              <div className="relative mx-auto w-full max-w-[600px] aspect-[4/5]">
                <Image
                  src={teacherImage}
                  alt={teacherName || 'Teacher'}
                  fill
                  sizes="(max-width: 768px) 90vw, 600px"
                  className="object-contain rounded-xl"
                />
              </div>

              <div className="pt-6 md:pt-8">
                <p className="font-bold text-black leading-tight text-[clamp(2.8rem,6vw,8rem)]">
                  {teacherName}
                </p>
                {message && (
                  <p className="text-black mt-3 leading-snug text-[clamp(1.6rem,4vw,5rem)]">
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
