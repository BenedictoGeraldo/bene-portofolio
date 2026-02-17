import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { educationConfig } from '@/config/Education';
import Image from 'next/image';

export default function Education() {
  const { university, major, period, gpa, logo } = educationConfig;

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="My" heading="Education" />

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {logo && (
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt={university}
              width={80}
              height={80}
              className="rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{university}</h3>
          <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">
            {major}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">{period}</span>
            </div>

            {gpa && (
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400">
                  GPA: {gpa}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
