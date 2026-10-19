import 'package:flutter/material.dart';

void main() {
  runApp(const CarteEtudiant());
}

class CarteEtudiant extends StatelessWidget {
  const CarteEtudiant({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey[200],
        appBar: AppBar(
          title: const Text('Carte Étudiant'),
          backgroundColor: Colors.teal,
          centerTitle: false,
        ),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Card(
              elevation: 4,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Colonne de gauche : Photo
                    const CircleAvatar(
                      radius: 50,
                      backgroundImage: NetworkImage(
                        'https://picsum.photos/150',
                      ),
                    ),
                    const SizedBox(width: 20),

                    // Colonne de droite : Informations
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Text(
                            'Atef Ben Abdallah',
                            style: TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'Spécialité : E-Business',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.grey[700],
                            ),
                          ),
                          const SizedBox(height: 12),
                          const Row(
                            children: [
                              Text('🎯 ', style: TextStyle(fontSize: 14)),
                              Text(
                                'Objectif :',
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 14,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 2),
                          const Text(
                            'Motivée pour devenir développeuse mobile Flutter.',
                            style: TextStyle(fontSize: 14),
                          ),
                          const SizedBox(height: 12),
                          Row(
                            children: [
                              const Text('📧 ', style: TextStyle(fontSize: 14)),
                              Text(
                                'Email : alia.tounsi@example.com',
                                style: TextStyle(
                                  fontSize: 13,
                                  color: Colors.grey[800],
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 6),
                          Row(
                            children: [
                              const Text('📱 ', style: TextStyle(fontSize: 14)),
                              Text(
                                'Téléphone : +216 20 123 456',
                                style: TextStyle(
                                  fontSize: 13,
                                  color: Colors.grey[800],
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}