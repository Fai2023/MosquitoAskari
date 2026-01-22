import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExpressionOfInterest = () => {
    const { toast } = useToast();
    const [locations, setLocations] = useState([{ name: "", address: "", quantity: 1 }]);
    const [period, setPeriod] = useState("12");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const prices = {
        "6": "400,000",
        "12": "325,000"
    };

    const addLocation = () => {
        setLocations([...locations, { name: "", address: "", quantity: 1 }]);
    };

    const removeLocation = (index: number) => {
        if (locations.length > 1) {
            setLocations(locations.filter((_, i) => i !== index));
        }
    };

    const updateLocation = (index: number, field: string, value: string | number) => {
        const newLocations = [...locations];
        newLocations[index] = { ...newLocations[index], [field]: value };
        setLocations(newLocations);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);

        // Add dynamic data
        formData.append("selected_period", `${period} months`);
        formData.append("monthly_price", `TZS ${prices[period as keyof typeof prices]}`);
        formData.append("locations_json", JSON.stringify(locations));

        // FormSubmit.co configuration
        // Disable captcha for smoother experience if desired, or keep it. Default is enabled.
        // formData.append("_captcha", "false"); 
        formData.append("_subject", "New Expression of Interest - MosquitoAskari");
        formData.append("_template", "table"); // Makes the email look nicer

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@mosquitoaskari.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                toast({
                    title: "Form Submitted Successfully",
                    description: "Thank you! Your expression of interest has been sent. Please check your email for any confirmation if applicable.",
                });
                // Optional: Reset form
                // formElement.reset();
                // setLocations([{ name: "", address: "", quantity: 1 }]);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast({
                variant: "destructive",
                title: "Submission Error",
                description: "There was a problem sending your form. Please try again or contact us directly at info@mosquitoaskari.com",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-cream">
            <Header />
            <main className="container mx-auto px-4 py-32 max-w-4xl">
                <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border">
                    <div className="text-center mb-12">
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Mosquito Trap Rental
                        </span>
                        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                            Expression of Interest & Commitment Form
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        {/* Section 1: Interested Party Details */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold text-primary border-b border-border pb-2">
                                Interested Party Details
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="companyName">Company / Individual Name</Label>
                                    <Input id="companyName" name="companyName" required placeholder="Enter name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contactPerson">Contact Person</Label>
                                    <Input id="contactPerson" name="contactPerson" required placeholder="Enter contact person" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="telephone">Telephone</Label>
                                    <Input id="telephone" name="telephone" required placeholder="Enter phone number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" required placeholder="Enter email address" />
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Rental Locations */}
                        <section className="space-y-6">
                            <div className="flex justify-between items-center border-b border-border pb-2">
                                <h2 className="text-xl font-bold text-primary">
                                    Rental Locations and Quantities
                                </h2>
                                <Button type="button" onClick={addLocation} variant="outline" size="sm" className="gap-2">
                                    <Plus className="w-4 h-4" /> Add Location
                                </Button>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Please list the locations where the mosquito traps will be installed.
                            </p>

                            <div className="border rounded-lg overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Location / Site Name</TableHead>
                                            <TableHead>Physical Address</TableHead>
                                            <TableHead className="w-[100px]">Quantity</TableHead>
                                            <TableHead className="w-[50px]"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {locations.map((loc, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <Input
                                                        value={loc.name}
                                                        onChange={(e) => updateLocation(index, "name", e.target.value)}
                                                        placeholder="e.g. Main Office"
                                                        required
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Input
                                                        value={loc.address}
                                                        onChange={(e) => updateLocation(index, "address", e.target.value)}
                                                        placeholder="Physical address"
                                                        required
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Input
                                                        type="number"
                                                        min="1"
                                                        value={loc.quantity}
                                                        onChange={(e) => updateLocation(index, "quantity", parseInt(e.target.value))}
                                                        required
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    {locations.length > 1 && (
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => removeLocation(index)}
                                                            className="text-destructive hover:text-destructive/90"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </section>

                        {/* Section 3: Pricing and Period */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold text-primary border-b border-border pb-2">
                                Rental Pricing and Period
                            </h2>
                            <div className="bg-primary/5 p-6 rounded-xl space-y-4">
                                <p className="font-medium text-lg">
                                    Monthly rental price per mosquito trap: <span className="text-primary font-bold">TZS {prices[period as keyof typeof prices]}</span> <span className="text-sm font-normal text-muted-foreground">+ VAT</span> per unit per month
                                </p>
                                <p className="text-muted-foreground">
                                    The rental price includes full servicing and maintenance.
                                </p>

                                <div className="pt-4">
                                    <Label className="text-base mb-3 block">Selected rental period:</Label>
                                    <RadioGroup
                                        value={period}
                                        onValueChange={setPeriod}
                                        className="flex gap-8"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="6" id="r6" />
                                            <Label htmlFor="r6">6 months</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="12" id="r12" />
                                            <Label htmlFor="r12">12 months</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Service Scope */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold text-primary border-b border-border pb-2">
                                Service and Maintenance Scope (Included)
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Regular inspection and operational checks</li>
                                <li>Replacement of gas cylinders as required</li>
                                <li>Monitoring of mosquito catch levels and timing to replacement</li>
                                <li>Cleaning of the machine and all relevant components</li>
                                <li>Preventive maintenance to ensure effective and continuous operation</li>
                            </ul>
                        </section>

                        {/* Section 5: Commitment */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold text-primary border-b border-border pb-2">
                                Commitment in Principle
                            </h2>
                            <div className="bg-muted/30 p-6 rounded-xl">
                                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                                    By signing below, the interested party confirms their intention to rent the mosquito traps at the locations and quantities listed above, at a rental price of TZS {prices[period as keyof typeof prices]} + VAT per unit per month, for the selected rental period, subject to final commercial terms and execution of a formal rental agreement.
                                    <br /><br />
                                    This document represents a commitment in principle and supports planning, equipment allocation, and servicing schedules.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="signName">Name</Label>
                                        <Input id="signName" name="signName" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signPosition">Position</Label>
                                        <Input id="signPosition" name="signPosition" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signature">Signature (Type Name)</Label>
                                        <Input id="signature" name="signature" required className="font-display italic text-lg" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="date">Date</Label>
                                        <Input id="date" name="date" type="date" required />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-end pt-8">
                            <Button
                                type="submit"
                                size="xl"
                                className="w-full md:w-auto text-lg font-semibold"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Expression of Interest"}
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ExpressionOfInterest;
