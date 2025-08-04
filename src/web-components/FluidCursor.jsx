'use client';
import { useEffect } from 'react';

import fluidCursor from '@/web-hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    try{ 
      fluidCursor();
    } catch(e) {
      console.warn(e);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 -z-30">
      <canvas id="fluid" className="h-screen w-screen" />
    </div>
  );
};
export default FluidCursor;
