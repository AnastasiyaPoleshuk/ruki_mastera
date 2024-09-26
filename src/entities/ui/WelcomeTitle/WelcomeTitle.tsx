import "./WelcomeTitle.scss";

export const WelcomeTitle = () => {
  return (
    <article className="welcome__article">
      <h1 className="welcome__title">
        Мастер на час <br /> <span> в Гомеле</span>
      </h1>
      <p className="welcome__sub-title">
        Решим <span>любые</span> Ваши бытовые проблемы
      </p>
    </article>
  );
};
