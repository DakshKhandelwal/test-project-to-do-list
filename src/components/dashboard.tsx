// frontend/src/app/dashboard/page.tsx
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Good morning, Joe!</h1>
        <button className="logout-button">Logout</button>
      </header>
      <nav className="dashboard-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Boards</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Analytics</a></li>
        </ul>
        <button className="create-task-button">Create new task</button>
      </nav>
      <main className="dashboard-main">
        <section className="tasks-section">
          <h2>Tasks</h2>
          <div className="tasks-board">
            <div className="task-column">
              <h3>To do</h3>
              <div className="task-card">
                <h4>Implement User Authentication</h4>
                <p>Design and integrate user authentication using email and password.</p>
                <p>Urgent</p>
                <p>2024-08-15</p>
              </div>
            </div>
            <div className="task-column">
              <h3>In progress</h3>
              {/* Add task cards here */}
            </div>
            <div className="task-column">
              <h3>Under review</h3>
              {/* Add task cards here */}
            </div>
            <div className="task-column">
              <h3>Finished</h3>
              {/* Add task cards here */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
