CREATE TABLE customer (
 customerId INT PRIMARY KEY AUTO_INCREMENT,
 name text,
 email text,
 picture text,
createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
  commentId INT PRIMARY KEY AUTO_INCREMENT,
  content text,
  customerId INT,
  parentId INT NULL,
  upVotesCount INT,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customerId) REFERENCES customer(customerId)
);

CREATE TABLE upVotes (
  upVotesId INT PRIMARY KEY AUTO_INCREMENT,
  commentId INT,
  customerId INT,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (commentId) REFERENCES comments(commentId),
  FOREIGN KEY (customerId) REFERENCES customer(customerId)
);