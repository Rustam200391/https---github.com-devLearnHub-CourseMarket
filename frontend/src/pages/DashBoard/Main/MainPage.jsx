import React, { useRef, useEffect } from "react";
import axios from "axios";
import style from "./style.module.scss";

export const Player = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.poster}>
          <img
            src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
            alt="Location Unknown"
          />
        </div>
        <div className={style.details}>
          <h1>Location Unknown</h1>
          <h2>2023 • PG • 1hr 38min</h2>
          <div className={style.rating}>
            <i className={(style.fas, style.fa_star)}></i>
            <i className={(style.fas, style.fa_star)}></i>
            <i className={(style.fas, style.fa_star)}></i>
            <i className={(style.fas, style.fa_star)}></i>
            <i className={(style.far, style.fa_star)}></i>
            <span>4.2/5</span>
          </div>
          <div className={style.tags}>
            <span className={style.tag}>Italian</span>
            <span className={style.tag}>Drama</span>
            <span className={style.tag}>Indie</span>
          </div>
          <p className={style.desc}>
            Marco, a disillusioned backpacker in his late 20s, embarks on a
            solitary journey in search for meaning.
          </p>
          <div className={style.cast}>
            <h3>Cast</h3>
            <ul>
              <li>
                <img
                  src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg"
                  alt="Marco Andrews"
                  title="Marco Andrews"
                />
              </li>
              <li>
                <img
                  src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg"
                  alt="Rebecca Floyd"
                  title="Rebecca Floyd"
                />
              </li>
              <li>
                <img
                  src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg
"
                  alt="Antonio Herrera"
                  title="Antonio Herrera"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.poster}>
          <img
            src="https://i.postimg.cc/GtxLYS7q/poster2-img.jpg"
            alt="Location Unknown"
          />
        </div>
        <div className={style.details}>
          <h1>Air</h1>
          <h2>2022 • PG • 24min</h2>
          <div className={style.rating}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <span>4/5</span>
          </div>
          <div className={style.tags}>
            <span className={style.tag}>Romance</span>
            <span className={style.tag}>Comedy</span>
            <span className={style.tag}>Short</span>
          </div>
          <p className={style.desc}>
            Two strangers meet together on a plane flying to the alps.
          </p>
          <div className={style.cast}>
            <h3>Cast</h3>
            <ul>
              <li>
                <img
                  src="https://i.postimg.cc/yY2QcYRp/cast-21.jpg"
                  alt="Angelina Whyte"
                  title="Angelina Whyte"
                />
              </li>
              <li>
                <img
                  src="https://i.postimg.cc/R0BgpsXc/cast-22.jpg"
                  alt="Ivan Benson"
                  title="Ivan Benson"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.poster}>
          <img
            src="https://i.postimg.cc/yxH6DzPD/poster3-img.jpg"
            alt="Location Unknown"
          />
        </div>
        <div className={style.details}>
          <h1>End Credits</h1>
          <h2>2023 • R • 1hr 41min</h2>
          <div className={style.rating}>
            <i class={(style.fas, style.fa_star)}></i>
            <i className={(style.fas, style.fa_star)}></i>
            <i className={(style.fas, style.fa_star)}></i>
            <i className={(style.fas, style.fa_star)}></i>
            <i className={(style.fas, style.fa_star_half_alt)}></i>
            <span>4.7/5</span>
          </div>
          <div className={style.tags}>
            <span className={(style.tag, style.yellow)}>Teen</span>
            <span className={style.tag}>Comedy</span>
            <span className={(style.tag, style.blue)}>Drama</span>
          </div>
          <p className={style.desc}>
            Alex, together with his best friends, goes on a road trip whilst
            experiencing friendship, self-discovery, and the bittersweet
            transition to adulthood.
          </p>
          <div className={style.cast}>
            <h3>Cast</h3>
            <ul>
              <li>
                <img
                  src="https://i.postimg.cc/xd3twv4B/cast-31.jpg"
                  alt="Jessica Enduro"
                  title="Jessica Enduro"
                />
              </li>
              <li>
                <img
                  src="https://i.postimg.cc/C1MmSZy5/cast-32.jpg"
                  alt="Charles Garcia"
                  title="Charles Garcia"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?key=B7DCCB0D777EF498ED9EE8645DD919FE&match_id=7238813206 */
}

//API Youtube: AIzaSyDLWELZdvrr7Okbz2zp5DTd1E7nHbH9X9Q;
