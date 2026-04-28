# Smart Campus Hub - Database Design

## Architecture Overview
This project uses a **Referencing (Linking)** model. Rather than nesting data inside large documents, we use unique identifiers (`_id`) to link collections. This ensures the system remains fast as the number of students and posts grows.

## Collection Structure & Linking
1. **Users & Opportunities:** Linked via `creator_id`.
2. **Applications:** A join collection that references both `opportunity_id` and `applicant_id`. 
3. **Comments:** Linked to posts via `post_id`.
4. **Bookmarks:** Stored as an array of IDs within the User document for fast "Saved Posts" retrieval.

## Embedding vs. Referencing Decisions
* **Why Referencing?** We chose referencing for **Applications** and **Comments**. In a campus setting, a popular hackathon could have hundreds of comments and thousands of applicants. Embedding this data would risk hitting MongoDB's 16MB document limit and slow down the database.
* **Why Embedding (Partial)?** We embedded the `skills` and `bookmarked_posts` arrays directly in the User document. Since these lists are typically small (under 20-30 items), embedding them allows the UI to load a personalized dashboard in a single query.

## 🔥 Smart Feature: Skill-Based Filtering
The "Smart" element of this Hub is the **Automated Match Engine**.

### Implementation:
- Each **User** has a `skills` array.
- Each **Opportunity** has a `required_skills` array.
- **Logic:** The system compares these two arrays. If there is an intersection (e.g., both contain "React"), that post is boosted to the top of the student's feed.

### How it works:
When a student like **Arjun (User 101)** opens the app, the database filters opportunities where `required_skills` matches any value in Arjun's `skills` list. This creates a "Recommended for You" section that increases engagement and helps students find relevant roles faster.
