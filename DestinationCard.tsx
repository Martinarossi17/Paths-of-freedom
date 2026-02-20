import { MapPin, Tag } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  description: string;
  location: string;
  category: string;
  imageUrl: string;
  link: string;
}

export default function DestinationCard({
  title,
  description,
  location,
  category,
  imageUrl,
  link
}: DestinationCardProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-red-900 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Tag className="w-4 h-4" />
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-red-900 mb-3 group-hover:text-red-700 transition-colors">
          {title}
        </h3>
        <p className="text-slate-700 italic mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center gap-2 text-slate-600">
          <MapPin className="w-4 h-4 text-red-900" />
          <span className="text-sm font-medium">{location}</span>
        </div>
      </div>
    </a>
  );
}
