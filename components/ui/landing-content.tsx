"use client";
import {CardTitle, Card, CardHeader, CardContent} from "@/components/ui/card";

const testimonials = [
    {
        name: "Aleze",
        avatar: "A",
        title: "Software Engineer",
        description: 'This is the best AI tool I have ever used'
    },
    {
        name: "Taha",
        avatar: "T",
        title: "Data Engineer",
        description: 'Game changer'
    },{
        name: "Hamid",
        avatar: "H",
        title: "Software Engineer",
        description: 'Very cool'
    },{
        name: "Myra",
        avatar: "M",
        title: "Software Engineer",
        description: 'Seriously impressed '
    },
];

const LandingComponent = () => {
    return (
        <div className={'px-10 pb-20'}>
            <h2 className={"text-center text-4xl text-white font-extrabold mb-10"}>
                Testimonials
            </h2>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
                {testimonials.map((item) => (
                    <Card key={item.description} className={'bg-black border-none text-white'}>
                        <CardHeader>
                            <CardTitle className={'flex items-center gap-x-2'}>
                                <div>
                                    <p className="text-lg">
                                        {item.name}
                                    </p>
                                    <p className={"text-zinc-400 text-sm"}>
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className={'pt-4 px-0'}>
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LandingComponent;
