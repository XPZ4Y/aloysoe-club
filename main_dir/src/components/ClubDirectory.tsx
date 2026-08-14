// src/components/ClubDirectory.tsx
import { useState } from 'react';
import type { Club } from '../data/clubs';

interface Props {
  initialClubs: Club[];
}

const categories = ["All", "Cultural", "Technical", "Literary", "Sports", "Social Service", "Arts & Media"];

export default function ClubDirectory({ initialClubs }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredClubs = initialClubs.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || club.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="directory-container">
      <div className="filters-section" style={{ flexDirection: 'column' }}>
        <input
          type="search"
          className="search-box"
          placeholder="Search clubs..."
          aria-label="Search clubs by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '1rem', width: '100%', maxWidth: '400px' }}
        />
        
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="club-grid-section">
        {filteredClubs.length > 0 ? (
          <div className="club-grid">
            {filteredClubs.map((club) => (
              <a href={`/clubs/${club.id}`} className="club-card" key={club.id}>
                <div className="club-card-header">
                  <img src={club.logo} alt={`${club.name} logo`} className="club-logo" loading="lazy" width={60} height={60} />
                  <div className="club-card-info">
                    <div className="club-card-category">{club.category}</div>
                    <h3 className="club-card-name">{club.name}</h3>
                    <p className="club-card-tagline">{club.tagline}</p>
                  </div>
                </div>
                <div className="club-card-footer">
                  <span className="visit-btn outline">View Details</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No clubs found</h3>
            <p>Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
