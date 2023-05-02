interface Props {
  href?: string;
  imageSrc?: string;
  title: string;
  description?: string;
}

export default function ProjectCard({
  href,
  imageSrc,
  title,
  description,
}: Props) {
  return (
    <a href={href} target="_blank" className="group">
      <div className="rounded-2xl overflow-hidden text-black dark:text-white w-auto border border-slate-50/50 shadow-lg">
        {imageSrc && (
          <img
            className="h-1/2 w-full object-top object-cover"
            src={imageSrc}
            alt={title}
          />
        )}

        <div className="py-2 px-4 sm:py-4 sm:px-8 flex justify-between gap-2 group-hover:bg-slate-900/10 group-hover:dark:bg-slate-50/10">
          <div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p>{description}</p>
          </div>
          <div className="h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
