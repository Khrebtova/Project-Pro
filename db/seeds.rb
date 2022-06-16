#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."

marshal = Employee.create(name: 'Marshal Erikson', title: 'Senior engineer');
lily = Employee.create(name: 'Lili Aldrin', title: 'Junior engineer');
barney = Employee.create(name: 'Barney Stinson', title: 'Project designer');
ted = Employee.create(name: 'Ted Mosby', title: 'Architect');
robin = Employee.create(name: 'Robin Scherbatsky', title: 'Senior engineer');

chocolate = Client.create(name: 'Wonka Industries');
globex = Client.create(name: 'Globex Corporation');
stark = Client.create(name: 'Stark Industries');
wayne = Client.create(name: 'Wayne Enterprises');
acme = Client.create(name: 'Acme Corporation');
initech = Client.create(name: 'Initech');

project1 = Project.create(name: 'New Factory', description: '', completed: false, client: chocolate, employee: marshal);
project2 = Project.create(name: 'Office building', description: '', completed: false, client: globex, employee: lily);
project3 = Project.create(name: 'Military base', description: '', completed: false, client: stark, employee: barney);
project4 = Project.create(name: 'Bank building', description: '', completed: false, client: wayne, employee: ted);
project5 = Project.create(name: 'Convention Center', description: '', completed: false, client: acme, employee: robin);

puts "🌱 Done seeding!"
