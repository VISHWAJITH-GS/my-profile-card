import React from 'react';
import ProfileCard from './components/ProfileCard';
import LetterGlitch from './LetterGlitch'; 

function App() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh',
      overflow: 'hidden'
    }}>
      {/* Background Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <LetterGlitch
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Content Layer */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '20px'
      }}>
        <ProfileCard
          name="VISHWAJTIH"
          title="AIML Developer"
          handle="Ajith"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/avatar.jpg"
          miniAvatarUrl="/avatar.jpg"
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => window.open('https://vishwajith-gs.github.io/portfolio/', '_blank')}
        />
      </div>
    </div>
  );
}

export default App;