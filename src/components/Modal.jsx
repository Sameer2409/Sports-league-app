import React from "react";
import { X } from "lucide-react";

function Modal({ isOpen, onClose, title, league, badge }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
				<div className="p-6">
					<div className="flex justify-between items-start mb-4">
						<h3 className="text-xl font-bold text-gray-800">{title}</h3>
						<button
							onClick={onClose}
							className="text-gray-400 hover:text-gray-600 transition-colors"
						>
							<X className="w-6 h-6" />
						</button>
					</div>
					<div>
						<img
							src={badge?.strBadge}
							alt={`${league?.strLeague} badge`}
							className="w-20 h-20 mx-auto mb-3 object-contain"
						/>
						{badge?.strSeason && (
							<p className="text-sm text-gray-600 mb-2">
								Season: {badge?.strSeason}
							</p>
						)}
						{badge?.strDescriptionEN && (
							<p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
								{badge?.strDescriptionEN}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
