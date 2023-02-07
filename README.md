CREATE TABLE public.customers(
	"customerId" character varying(255) NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"picture" VARCHAR(255),
	"createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP, 
	"updatedAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT customerId PRIMARY KEY ("customerId")
);

CREATE TABLE public.comments 
( 
"commentId" SERIAL NOT NULL, 
"content" text, 
"customerId" character varying(255) NOT NULL, 
"parentId" integer NULL, 
"upVotesCount" integer NOT NULL,
"createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP, 
"updatedAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP, 
CONSTRAINT commentId PRIMARY KEY ("commentId"),
CONSTRAINT "customerId" FOREIGN KEY ("customerId") 
REFERENCES public.customers ("customerId") MATCH SIMPLE
); 


CREATE TABLE public.upVotes 
( 
"upVotesId" SERIAL NOT NULL, 
"commentId" integer NOT NULL, 
"customerId" character varying(255) NOT NULL, 
"createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP, 
"updatedAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP, 
CONSTRAINT upVotesId PRIMARY KEY ("upVotesId"),
CONSTRAINT "customerId" FOREIGN KEY ("customerId") 
REFERENCES public.customers ("customerId") MATCH SIMPLE,
CONSTRAINT "commentId" FOREIGN KEY ("commentId") 
REFERENCES public.comments ("commentId") MATCH SIMPLE
); 

......................................


INSERT INTO people(customer_name, email, picture) VALUES('Sonu Shahuji', 'sonushahuji4@gmail.com', 'pictures');

INSERT INTO customers(customer_name, email, picture) VALUES('Sonu Shahuji', 'sonushahuji4@gmail.com', 'pictures');


INSERT INTO comments(contents, customer_id,parent_Id,upVotesCount) VALUES('First Comments', 1, NULL, 0);

CREATE TABLE customers(
    customer_id serial PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    picture VARCHAR(255) NOT NULL,
    createdAt timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP, 
	updatedAt timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments 
( 
    comment_Id serial PRIMARY KEY, 
    contents text, 
    customer_id INT NOT NULL, 
    parent_Id INT NULL, 
    upVotesCount INT NOT NULL,
    createdAt timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP, 
	updatedAt timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
); 

CREATE TABLE votes 
( 
    vote_id serial PRIMARY KEY, 
    comment_Id INT NOT NULL, 
    customer_id INT NOT NULL, 
    createdAt timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP, 
	updatedAt timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
    FOREIGN KEY (comment_Id) REFERENCES comments (comment_Id)
); 

DROP TABLE comments CASCADE;
DROP TABLE customers CASCADE;
DROP TABLE upvotes CASCADE;


SERVER_PORT = 3000
HOST=sql12.freesqldatabase.com
DATABASE_NAME=sql12595738
USERNAME=sql12595738
PASSWORD=EvdmJDR7px
PORT=3306
URL=jdbc:mysql://sql12.freesqldatabase.com:3306/sql12595738