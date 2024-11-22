import React from "react";
import { Link } from "react-router-dom";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Achieve Your Goals with Elite Edge Fitness</h1>
        <p>
        At Elite Edge Fitness, we are committed to helping you reach your full potential.Join us today and unlock a healthier, stronger, and more confident you!. Link for our videos <Link to="/ytvideos" style={{textDecoration:'none',color:'purple'}}>Link.</Link> 
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>Main Features</h1>
        <p>
        Here are some reasons why you should consider joining Elite Edge Fitness.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Top-Class Trainers</h4>
            <p>
            Highly experienced and certified personal trainers offering tailored workout plans and guidance for all fitness levels.
            </p>
          </div>
          <div>
            <h4>Zumba Classes</h4>
            <p>
            Energizing and fun-filled Zumba sessions led by certified instructors, perfect for boosting your cardio while dancing to rhythmic beats.
            </p>
          </div>
          <div>
            <h4>Progress Tracking</h4>
            <p>
            Detailed progress tracking with regular assessments, including body composition analysis and strength metrics to monitor your improvement.
            </p>
          </div>
          <div>
            <h4>Competition Training Programs</h4>
            <p>
            Specialized training programs designed for athletes preparing for bodybuilding, powerlifting, or fitness competitions, tailored to meet the demands of high-level performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
