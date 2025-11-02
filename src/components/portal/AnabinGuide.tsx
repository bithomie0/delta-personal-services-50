import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export function AnabinGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 sm:p-4 dark:border-blue-800 dark:bg-blue-950 space-y-3 sm:space-y-4">
      {/* Upload Instructions */}
      <div>
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
          📚 Upload Your Educational Certificates
        </h3>
        <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
          <strong>Accepted file formats:</strong>
        </p>
        <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1">
          <li>PDF, JPG, PNG (Max. 10MB)</li>
        </ul>
      </div>

      {/* Anerkennung Explanation */}
      <div className="border-t border-blue-200 dark:border-blue-800 pt-3 sm:pt-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
          🏆 Why Is Recognition (Anerkennung) Important?
        </h3>
        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
          Your educational certificates may need official recognition (<strong>Anerkennung</strong>) 
          to be accepted in Germany. This ensures your qualifications meet German standards.
        </p>
        <a
          href="https://www.anerkennung-in-deutschland.de/html/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium underline underline-offset-4"
        >
          Learn more: Anerkennung in Germany
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* What is Anabin Section */}
      <div className="border-t border-blue-200 dark:border-blue-800 pt-3 sm:pt-4">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
          🔍 What is Anabin?
        </h3>
        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
          <strong>Anabin</strong> is Germany's official database for evaluating foreign educational qualifications. 
          It helps you check whether your university and degree are recognized in Germany.
        </p>
        <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
          <p className="font-medium">Why should you check Anabin before uploading?</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Saves time: Know if your degree is recognized before applying</li>
            <li>Avoid delays: Ensures your certificates meet German requirements</li>
            <li>Better preparation: Understand if you need additional recognition steps</li>
          </ul>
        </div>
      </div>

      {/* Collapsible Anabin Guide */}
      <div className="border-t border-blue-200 dark:border-blue-800 pt-3 sm:pt-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
              🔍 How To Check Your Degree With Anabin
            </h3>
            
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-between text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-900"
              >
                <span className="text-sm font-medium">
                  {isOpen ? 'Hide Guide' : 'Show Step-by-Step Guide'}
                </span>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-4">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Before uploading, please check if your degree is recognized using the Anabin database.
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Step 1: Go to the Anabin database
                  </h4>
                  <a
                    href="https://anabin.kmk.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium underline underline-offset-4"
                  >
                    Visit Anabin Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Step 2 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Step 2: Select your institution ('Institutionen')
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1 ml-2">
                    <li>Enter your university name</li>
                    <li>Check if it's rated <strong>H+</strong> (recognized)</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Step 3: Check your degree ('Hochschulabschlüsse')
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1 ml-2">
                    <li>Use the search tab to enter your degree title</li>
                    <li>Filter by country and degree type if needed</li>
                    <li>Make sure your degree name matches exactly</li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Step 4: Review the results
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1 ml-2">
                    <li><strong>H+</strong> status means your institution is recognized</li>
                    <li>For mixed or unclear status (<strong>H+/-</strong>), please check both the university and your degree details</li>
                    <li>If your degree is not found or recognition is unclear, contact us for support</li>
                  </ul>
                </div>
              </div>

              {/* Support Message */}
              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  💡 <strong>Need help?</strong> Feel free to reach out for guidance!
                </p>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}
