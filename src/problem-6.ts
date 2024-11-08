interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(
  profile: Profile,
  updates: { name?: string; age?: number; email?: string }
): Profile {
  const updatedProfile: Profile = { ...profile };

  if (updates.name !== undefined) {
    updatedProfile.name = updates.name;
  }
  if (updates.age !== undefined) {
    updatedProfile.age = updates.age;
  }
  if (updates.email !== undefined) {
    updatedProfile.email = updates.email;
  }
  return updatedProfile;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
