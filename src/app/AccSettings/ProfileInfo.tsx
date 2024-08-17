import React, { useState } from 'react';

interface ProfileInfoProps {
  initialName: string;
  initialAge: number;
  initialSchool: string;
  initialPassion: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ initialName, initialAge, initialSchool, initialPassion }) => {
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);
  const [school, setSchool] = useState(initialSchool);
  const [passion, setPassion] = useState(initialPassion);

  return (
    <section className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-28 text-4xl font-bold text-black leading-[60px] max-md:mt-10 max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a2fbd08859da21248f4e8e4d5a49ebd1ac24bb7b3100d09bd56ba4ee7fa35f?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" 
          alt={`Profile picture of ${name}`} 
          className="object-contain ml-6 max-w-full aspect-[1.14] rounded-[100px] w-[188px] max-md:ml-2.5" 
        />
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="w-32 text-right">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="ml-14 text-3xl flex-grow"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="age" className="w-32 text-right">Age:</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="ml-20 text-3xl flex-grow"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="school" className="w-32 text-right">School:</label>
            <input
              id="school"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="ml-10 text-3xl flex-grow"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="passion" className="w-32 text-right">Passion:</label>
            <input
              id="passion"
              type="text"
              value={passion}
              onChange={(e) => setPassion(e.target.value)}
              className="ml-10 text-3xl flex-grow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
