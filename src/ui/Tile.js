import React from 'react';

const styles = {
  tileContainer: {
    position: 'relative',
    width: '200px',
    height: '350px',
    margin: '5px',
    perspective: '1000px',
    flexShrink: 0,
    flexGrow: 0
  },
  tileInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    borderRadius: '10px',
    boxShadow: '0 3px 15px 1px rgba(0, 0, 0, 0.1)'
  },
  face: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  back: {
    transform: 'rotateY(180deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0'
  },
  content: {
    padding: '10px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topText: {
    color: '#3B82F6',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: '0.9rem',
    margin: '0'
  },
  midText: {
    color: '#111827',
    fontWeight: 600,
    margin: '8px 0',
    fontSize: '0.9rem',
    textAlign: 'center'
  },
  midLink: {
    color: '#111827',
    fontWeight: 600,
    display: 'block',
    margin: '8px 0',
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
    textAlign: 'center'
  },
  botText: {
    color: '#374151',
    fontSize: '0.9rem',
    margin: '0',
    textAlign: 'center'
  },
  backText: {
    color: '#1F2937',
    fontSize: '0.9rem',
    textAlign: 'center'
  }
};

const Tile = ({ imgLink, topText, midText, midLink, botText, email }) => {
  const FrontContent = () => (
    <>
      {imgLink && (
        <img 
          src={imgLink} 
          alt={topText}
          style={styles.image}
        />
      )}
      <div style={styles.content}>
        <p style={styles.topText}>{topText}</p>
        {midLink ? (
          <a 
            href={midLink}
            style={styles.midLink}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
          >
            {midText}
          </a>
        ) : (
          <p style={styles.midText}>{midText}</p>
        )}
        <p style={styles.botText}>{botText}</p>
      </div>
    </>
  );

  const BackContent = () => (
    <div style={styles.backText}>
      Contact: {email}
    </div>
  );

  return (
    <div 
      style={styles.tileContainer}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('.tile-inner').style.transform = 'rotateY(180deg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('.tile-inner').style.transform = 'rotateY(0deg)';
      }}
    >
      <div className="tile-inner" style={styles.tileInner}>
        <div style={styles.face}>
          <FrontContent />
        </div>
        <div style={{...styles.face, ...styles.back}}>
          <BackContent />
        </div>
      </div>
    </div>
  );
};

export default Tile
