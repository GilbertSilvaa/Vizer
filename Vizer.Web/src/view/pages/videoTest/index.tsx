import { useRef } from 'react'
import { AiOutlineClear } from 'react-icons/ai'
import { IoPlay } from 'react-icons/io5'
import { VIDEO_TYPES } from '../../../app/config/constants'
import { secondsToHHMMSS } from '../../../app/utils'
import { Button, IconButton, Input, Select } from '../../components'
import styles from './styles.module.css'
import { useVideoTestController } from './useVideoTestController'

export function VideoTestView() {
  const player = useRef<HTMLDivElement>(null)
  
  const {
    setVideoAttr,
    handlePlayVideo,
    clearPlayerLogs,
    playerLogs
  } = useVideoTestController(player.current)

  return (
    <div className={styles.content}>
      <div className="header-page">
        <h1>Teste de Video</h1>
      </div>
      <div className={styles.container}>
        <form className={styles.search} onSubmit={handlePlayVideo}>
          <div className={styles.inputBox}>
            <div className={styles.input}>
              <Input 
                label='Video (URL)' 
                placeholder='https://www.cdn.com/vod/video.mp4'
                onChange={e =>  setVideoAttr('src', e.target.value)}
                isRequired
              />
            </div>

            <div className={styles.select}>
              <Select 
                label="Media Type" 
                options={VIDEO_TYPES.map(t => ({ label: t, value: t }))}
                onChange={e => setVideoAttr('type', e.target.value)}
                isRequired
              />
            </div>
          </div>

          <Button color='var(--green)'>
            <IoPlay/> Play
          </Button>
        </form>  

        <div className={styles.videoContent}>
          <div data-vjs-player className={styles.video}>
            <div ref={player}></div>
          </div>

          <section className={styles.logsContent}>
            <h4>Logs</h4>

            <div className={styles.logs}>
              {!playerLogs.length && 
                <div className={styles.log} style={{ background: '#3d83e621' }}>
                  <span>Sem registros</span>
                </div>
              }

              {playerLogs.map((log, index) => (
                <div 
                  key={index} 
                  className={styles.log}
                  style={{background: log.type === 'error' ? '#9d161648' : '#3d83e621'}}
                >
                  <span className={styles.logMessage}>{log.message}</span>
                  <span className={styles.time}>{secondsToHHMMSS(log.time)}</span>
                </div>
              ))}
            </div>

            <div className={styles.clearBtn}>
              <IconButton 
                color='var(--blue-2)' 
                icon={AiOutlineClear} 
                onClick={clearPlayerLogs}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}