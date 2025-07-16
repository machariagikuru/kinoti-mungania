
import { GraduationCap, Award, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            About Kinoti Mungania
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A dedicated educator and financial leader committed to serving the teachers of Meru County
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <GraduationCap className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Educational Excellence</h3>
                <p className="text-slate-600">
                  With years of experience in the education sector, I understand the challenges and opportunities that face our teaching community in Meru County.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Financial Expertise</h3>
                <p className="text-slate-600">
                  As a financial controller, I bring proven experience in prudent fund management, asset acquisition, and transparent financial governance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Community Commitment</h3>
                <p className="text-slate-600">
                  My vision extends beyond financial management to creating a comprehensive welfare system that truly supports our teachers and their families.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">My Vision</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              "To transform KUPPET Meru Branch into a model of excellence where every teacher feels supported, valued, and empowered. Through transparent financial management and comprehensive welfare programs, we will build a stronger future for our educational community."
            </p>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-slate-600 italic">
                Together, we will ensure that no teacher faces challenges alone, and every educator in Meru County thrives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
