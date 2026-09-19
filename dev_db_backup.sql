--
-- PostgreSQL database dump
--

\restrict GxUfj4wIUNlPDbRfQyUbiulLeDfZadALvnG5YzfaBWAVaaOyQ4ZUky0qJ8dJMJ1

-- Dumped from database version 16.15 (Ubuntu 16.15-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.15 (Ubuntu 16.15-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: webdev
--

CREATE TABLE public.categories (
    category_id integer NOT NULL,
    name text,
    description text
);


ALTER TABLE public.categories OWNER TO webdev;

--
-- Name: categorys_category_id_seq; Type: SEQUENCE; Schema: public; Owner: webdev
--

CREATE SEQUENCE public.categorys_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categorys_category_id_seq OWNER TO webdev;

--
-- Name: categorys_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: webdev
--

ALTER SEQUENCE public.categorys_category_id_seq OWNED BY public.categories.category_id;


--
-- Name: games; Type: TABLE; Schema: public; Owner: webdev
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    name text,
    category_id integer DEFAULT 1,
    hours_played numeric(6,1),
    image_link text,
    played boolean,
    user_rating numeric(2,1)
);


ALTER TABLE public.games OWNER TO webdev;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: webdev
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.games_game_id_seq OWNER TO webdev;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: webdev
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: categories category_id; Type: DEFAULT; Schema: public; Owner: webdev
--

ALTER TABLE ONLY public.categories ALTER COLUMN category_id SET DEFAULT nextval('public.categorys_category_id_seq'::regclass);


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: webdev
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: webdev
--

COPY public.categories (category_id, name, description) FROM stdin;
1	default	I am the default category, nothing special!
2	Grazy	stuff
3	Grace	yoyoyo
\.


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: webdev
--

COPY public.games (game_id, name, category_id, hours_played, image_link, played, user_rating) FROM stdin;
\.


--
-- Name: categorys_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: webdev
--

SELECT pg_catalog.setval('public.categorys_category_id_seq', 3, true);


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: webdev
--

SELECT pg_catalog.setval('public.games_game_id_seq', 1, true);


--
-- Name: categories categorys_pkey; Type: CONSTRAINT; Schema: public; Owner: webdev
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categorys_pkey PRIMARY KEY (category_id);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: webdev
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: games fk_category; Type: FK CONSTRAINT; Schema: public; Owner: webdev
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES public.categories(category_id) ON DELETE SET DEFAULT;


--
-- PostgreSQL database dump complete
--

\unrestrict GxUfj4wIUNlPDbRfQyUbiulLeDfZadALvnG5YzfaBWAVaaOyQ4ZUky0qJ8dJMJ1

