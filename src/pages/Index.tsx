import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const educationalSections = [
    {
      title: "Философия для детей",
      description: "Развиваем критическое мышление и учим задавать правильные вопросы о жизни",
      icon: "Brain",
      color: "bg-gradient-to-br from-club-green to-club-teal",
      age: "6-14 лет",
      image: "/img/61e28725-6cb0-4754-ae04-c60aa1cd3ee7.jpg"
    },
    {
      title: "Биографии великих людей",
      description: "Изучаем истории успеха и жизненные уроки выдающихся личностей",
      icon: "BookOpen",
      color: "bg-gradient-to-br from-club-teal to-club-cyan",
      age: "5-16 лет",
      image: "/img/968a7c8a-bfa1-45ac-93ef-c832991214a1.jpg"
    },
    {
      title: "Этикет и правила поведения",
      description: "Учим хорошим манерам и правилам общения в обществе",
      icon: "Users",
      color: "bg-gradient-to-br from-club-cyan to-club-green",
      age: "4-16 лет",
      image: "/img/e4343e4d-8c2c-4722-a4b3-8b8df47ff676.jpg"
    }
  ];

  const teachers = [
    {
      name: "Анна Петровна Смирнова",
      speciality: "Детская психология и философия",
      experience: "15 лет",
      education: "МГУ, факультет психологии"
    },
    {
      name: "Игорь Владимирович Котов",
      speciality: "История и биографистика",
      experience: "12 лет", 
      education: "СПбГУ, исторический факультет"
    },
    {
      name: "Мария Сергеевна Волкова",
      speciality: "Этикет и культура общения",
      experience: "8 лет",
      education: "РГГУ, культурология"
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "16:00-17:00", subject: "Философия для младших", ages: "6-9 лет" },
    { day: "Понедельник", time: "17:30-18:30", subject: "Биографии великих", ages: "8-12 лет" },
    { day: "Вторник", time: "16:00-17:00", subject: "Этикет и манеры", ages: "5-8 лет" },
    { day: "Среда", time: "16:00-17:00", subject: "Философия для старших", ages: "10-14 лет" },
    { day: "Четверг", time: "16:00-17:00", subject: "Истории успеха", ages: "9-16 лет" },
    { day: "Пятница", time: "16:00-17:00", subject: "Правила общения", ages: "6-12 лет" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-club-light via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-club-green to-club-teal rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-club-green to-club-teal bg-clip-text text-transparent">
              Детский Онлайн Клуб
            </h1>
          </div>
          <Button className="bg-gradient-to-r from-club-green to-club-teal hover:opacity-90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться с нами
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-montserrat font-bold mb-6 bg-gradient-to-r from-club-green via-club-teal to-club-cyan bg-clip-text text-transparent">
              Всестороннее развитие для детей
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Онлайн-клуб, где дети изучают философию, биографии великих людей и правила этикета. 
              Развиваем критическое мышление, эмпатию и культуру общения в дружественной атмосфере.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="Users" size={16} className="mr-2" />
                300+ учеников
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="Award" size={16} className="mr-2" />
                5 лет опыта
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="Star" size={16} className="mr-2" />
                4.9 рейтинг
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-gradient-to-r from-club-green to-club-teal hover:opacity-90 px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Пробное занятие
              </Button>
              <Button size="lg" variant="outline" className="border-club-green text-club-green hover:bg-club-green hover:text-white px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Расписание
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/img/7457361c-7783-4769-878f-be748e3d8d98.jpg" 
                alt="Дети изучают и развиваются" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-club-green to-club-teal rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-club-cyan to-club-teal rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Educational Sections */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
          Наши направления
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {educationalSections.map((section, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${section.color} opacity-80 flex items-center justify-center`}>
                  <Icon name={section.icon as any} size={48} className="text-white drop-shadow-lg" />
                </div>
                <Badge className="absolute top-4 right-4 bg-white/20 text-white border-white/30">
                  {section.age}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-gray-800">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-club-green text-club-green hover:bg-club-green hover:text-white">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            Расписание занятий
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {schedule.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-club-green">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-montserrat font-semibold text-gray-800">{item.day}</h4>
                    <Badge variant="outline" className="text-xs">{item.ages}</Badge>
                  </div>
                  <p className="text-club-teal font-semibold">{item.time}</p>
                  <p className="text-gray-600 text-sm">{item.subject}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
          Наши педагоги
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-club-green to-club-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <h4 className="font-montserrat font-semibold text-lg mb-2 text-gray-800">
                  {teacher.name}
                </h4>
                <p className="text-club-teal font-medium mb-2">{teacher.speciality}</p>
                <p className="text-gray-600 text-sm mb-1">Опыт: {teacher.experience}</p>
                <p className="text-gray-600 text-sm">{teacher.education}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* For Parents */}
      <section className="bg-gradient-to-br from-club-green/10 to-club-teal/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-montserrat font-bold mb-8 text-gray-800">
            Для родителей
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Shield" size={24} className="text-club-green mr-3" />
                <h4 className="font-montserrat font-semibold text-lg">Безопасность</h4>
              </div>
              <p className="text-gray-600">
                Все занятия проходят в безопасной онлайн-среде с модерацией педагогов. 
                Родители получают еженедельные отчеты о прогрессе.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="TrendingUp" size={24} className="text-club-teal mr-3" />
                <h4 className="font-montserrat font-semibold text-lg">Прогресс</h4>
              </div>
              <p className="text-gray-600">
                Индивидуальный подход к каждому ребенку. Отслеживаем развитие навыков 
                критического мышления и социальной адаптации.
              </p>
            </Card>
          </div>
          <Button className="mt-8 bg-gradient-to-r from-club-green to-club-teal hover:opacity-90 px-8 py-3">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Консультация для родителей
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-club-green to-club-teal rounded-xl flex items-center justify-center mr-4">
              <Icon name="Sparkles" size={28} className="text-white" />
            </div>
            <h2 className="text-2xl font-montserrat font-bold">Детский Онлайн Клуб</h2>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Развиваем будущих мыслителей, лидеров и культурных личностей через изучение философии, 
            биографий великих людей и правил этикета.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Icon name="Mail" size={20} className="mr-2" />
              info@club.ru
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 Детский Онлайн Клуб. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;