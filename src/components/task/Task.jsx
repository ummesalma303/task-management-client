


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";

export default function Task({ task, id }) {
  const { title, image, category, description } = task;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border-[1px] p-5 flex items-center space-x-2 cursor-grab"
    >
      <div>
        <Avatar className="w-16 h-16">
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h2>Title: {title}</h2>
        <h3>Category: {category}</h3>
        <p>Description: {description}</p>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};