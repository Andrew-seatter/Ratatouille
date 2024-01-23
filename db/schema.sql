DROP TABLE IF EXISTS user;

CREATE TABLE user (
    uid INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS recipe;

CREATE TABLE recipe (
    rid INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    user_id INTEGER,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(uid)
);

DROP TABLE IF EXISTS Posts;

CREATE TABLE Posts (
    post_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(uid)
);

DROP TABLE IF EXISTS Comments;

CREATE TABLE Comments (
    comment_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES Posts(post_id),
    FOREIGN KEY (user_id) REFERENCES user(uid)
);

DROP TABLE IF EXISTS Likes;

CREATE TABLE Likes (
    like_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(uid),
    FOREIGN KEY (post_id) REFERENCES Posts(post_id)
);

DROP TABLE IF EXISTS Saved;

CREATE TABLE Saved (
    saved_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(uid),
    FOREIGN KEY (post_id) REFERENCES Posts(post_id)
);

DROP TABLE IF EXISTS Followers;

CREATE TABLE Followers (
    follower_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    follower_user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(uid),
    FOREIGN KEY (follower_user_id) REFERENCES user(uid)
);

DROP TABLE IF EXISTS Following;

CREATE TABLE Following (
    following_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    following_user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(uid),
    FOREIGN KEY (following_user_id) REFERENCES user(uid)
);

DROP TABLE IF EXISTS RecipeSteps;

CREATE TABLE RecipeSteps (
    step_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    recipe_id INTEGER NOT NULL,
    step_number INTEGER NOT NULL,
    instruction TEXT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipe(rid)
);

DROP TABLE IF EXISTS RecipeIngredients;

CREATE TABLE RecipeIngredients (
    ingredient_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    recipe_id INTEGER NOT NULL,
    ingredient_name TEXT NOT NULL,
    quantity TEXT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipe(rid)
);
