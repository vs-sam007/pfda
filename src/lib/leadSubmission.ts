export const GOOGLE_SHEET_WEBHOOK_URL =
    process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycbzcAddXaj1IG7Z0R7AEjeFP10WrgvqmMDMJaWD5bBlu-3nvVI7SYZKsEmSOKO-PuiO_3g/exec";

export interface LeadSubmissionData {
    name: string;
    phone: string;
    email?: string;
    course?: string;
    education?: string;
    message?: string;
    formType: "demo" | "contact" | "enquiry";
}

/**
 * Submits lead data directly to Google Apps Script webhook
 * which appends a row to the PFDA Admissions Google Sheet
 * and sends an instant email notification to the academy.
 */
export async function submitLeadToGoogleSheet(data: LeadSubmissionData): Promise<{ success: boolean; error?: string }> {
    try {
        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // With mode: 'no-cors', reaching here means request was dispatched successfully
        return { success: true };
    } catch (err: any) {
        console.error("Failed to submit lead to Google Sheet:", err);
        return { success: false, error: err?.message || "Submission failed" };
    }
}
