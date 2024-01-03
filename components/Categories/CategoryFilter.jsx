import categoryFilter from "../lib/categoryLinks";
import NavLink from "../lib/NavLink";

const CategoryFilter = () => {
  return (
    <div className="relative lg:sticky top-4 self-start">
      <ul
        className="flex lg:flex-col items-center justify-center lg:justify-start gap-2 flex-wrap sm:flex-nowrap
      "
      >
        {categoryFilter.map((category) => {
          return (
            <li key={category.name} className="w-full">
              <NavLink
                href={{ pathname: category.pathname, query: category.query }}
              >
                {category.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CategoryFilter;
