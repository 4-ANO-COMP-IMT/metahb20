import 'package:flutter/material.dart';
import 'package:flutter1/pages/registerBookPage.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});
  
  @override
  Widget build(BuildContext context) {
    print("a");
    return MaterialApp(
      title: 'Minha Estante',
      debugShowCheckedModeBanner: false,
      home: RegisterBookPage(),
    );
  }
}
