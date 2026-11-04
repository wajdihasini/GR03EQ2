import 'package:flutter/material.dart';
import 'accueil_screen.dart';
import 'profil_screen.dart';
import 'details_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exercice Navigation 3 Écrans',
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: {
        '/': (context) => AccueilScreen(),
        '/profil': (context) => ProfilScreen(),
      },
      onGenerateRoute: (settings) {
        if (settings.name == '/details') {
          final message = settings.arguments as String? ?? 'Bienvenue sur l\'écran Détails !';
          return MaterialPageRoute(
            builder: (context) => DetailsScreen(message: message),
          );
        }
        return null;
      },
    );
  }
}