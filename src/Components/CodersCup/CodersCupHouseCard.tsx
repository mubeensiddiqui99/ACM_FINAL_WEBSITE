import React from "react";
import "./CodersCupHouseCard.css";
import ContollerImg from "../../images/Omen_(Full12).png";
import SentinelImg from "../../images/Cypher_artwork.png";
import InitiatorImg from "../../images/Sova_artwork.png";
import DuelistImg from "../../images/V_AGENTS_587x900_Jett.png";
const CodersCupHouseCard = () => {
  return (
    <>
      <div className="housecardstyle">
        <div className="card">
          <img src={ContollerImg} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">CONTROLLER</h5>
            <p className="card-text">
              Controller: the defenders, they're known for their mind-boggling
              use of lethal equipments to pave their way to the enemy territory.
              With their ingenious use of stuns, flashes, smokes and slows they
              can quickly outsmart there enemies.{" "}
            </p>
            <a href="#" className="btn btn-primary">
              View More
              <span className="more-info">
                {" "}
                And so who should be better at representing controller than
                omen? A hunter who takes down his foes from the shadows, his
                enemies scream with fear as he teleports from one place to the
                other and takes them down one by one.
              </span>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={SentinelImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">SENTINEL</h5>
            <p className="card-text">
              Sentinels: The protectors who can secure regions and watch flanks,
              both on assault and safeguard adjusts.Joined with their mechanical
              ability, strategic dynamic and practical technique are all set to
              prevail on the enormous stage.
            </p>
            <a href="#" className="btn btn-primary">
              View More
              <span className="more-info">
                Cypher: The guardian. The watcher, who keeps tabs on the enemy's
                move. Unique abilities like ' trapwire 'and ' cyber cage '
                leaves the opponent utterly stupified. A covert operative which
                increases the chances of winning at the crucial moments of the
                game.
              </span>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={InitiatorImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">INITIATOR</h5>
            <p className="card-text">
              Initiators: the attackers, they strategically place themselves in
              a contended ground and gradually push their foes away. With their
              remarkable wit, they can easily outsmart their enemies and quickly
              take over the battlefield.
            </p>
            <a href="#" className="btn btn-primary">
              View More
              <span className="more-info">
                The one representing the initiators is sova: the Russian hunter
                you cannot outrun. He tracks, finds and eliminates enemies with
                ruthless precision. His custom bow and remarkable scouting
                abilities makes him merciless
              </span>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={DuelistImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">DUELIST</h5>
            <p className="card-text">
              The duelist: the fierce warriors who can almost fight there way
              out of any calamity caused by their foes. Known for finding the
              perfect opening, they can easily clutch any round!{" "}
            </p>
            <a href="#" className="btn btn-primary">
              View More
              <span className="more-info">
                The character representing duelists is none other than Jett: the
                South Korean with an agile and evasive fighting style. She runs
                around in ease around all of her foes, cutting each of her
                enemies' heads before they even get the time to calibrate her
                motion!
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* style={{marginLeft:'20px',maxWidth:'20%'}}
style={{marginLeft:'20px',maxWidth:'20%'}}
style={{marginLeft:'20px',maxWidth:'20%'}}
style={{marginLeft:'20px',maxWidth:'20%'}} */}
    </>
  );
};

export default CodersCupHouseCard;
