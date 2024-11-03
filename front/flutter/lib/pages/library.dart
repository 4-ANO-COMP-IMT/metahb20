import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class BookListScreen extends StatefulWidget {
  BookListScreen({super.key});
  @override
  _BookListScreenState createState() => _BookListScreenState();
}

class _BookListScreenState extends State<BookListScreen> {
  List books = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchBooks();
  }

  Future<void> fetchBooks() async {
    final response = await http.get(Uri.parse(
        'https://minhaestante-mss-book-5096cba7f21c.herokuapp.com/api/books'));

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      setState(() {
        books = data['books'];
        isLoading = false;
      });
    } else {
      setState(() {
        isLoading = false;
      });
      throw Exception('Failed to load books');
    }
  }

  Future<void> deleteBook(String bookId) async {
    if (await _confirmDelete()) {
      final response = await http.delete(
        Uri.parse(
            'https://minhaestante-mss-book-5096cba7f21c.herokuapp.com/api/book'),
        body: json.encode({'bookId': bookId}),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        setState(() {
          books.removeWhere((book) => book['bookId'] == bookId);
        });
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Erro ao excluir livro')),
        );
      }
    }
  }

  Future<bool> _confirmDelete() async {
    return await showDialog(
          context: context,
          builder: (context) {
            return AlertDialog(
              title: Text('Confirmação'),
              content: Text('Tem certeza de que deseja excluir este livro?'),
              actions: [
                TextButton(
                  onPressed: () => Navigator.of(context).pop(false),
                  child: Text('Cancelar'),
                ),
                TextButton(
                  onPressed: () => Navigator.of(context).pop(true),
                  child: Text('Excluir'),
                ),
              ],
            );
          },
        ) ??
        false;
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Minha Estante',
      theme: ThemeData(
        primaryColor: Color(0xFF643200),
        colorScheme:
            ColorScheme.fromSwatch().copyWith(secondary: Color(0xFF700000)),
        scaffoldBackgroundColor: Color(0xFFe5cc9f),
        textTheme: TextTheme(
          titleLarge: TextStyle(
            color: Colors.white,
            fontFamily: 'Sedan',
            fontWeight: FontWeight.bold,
          ),
          bodyMedium: TextStyle(
            color: Colors.black,
            fontFamily: 'Sedan',
          ),
        ),
        buttonTheme: ButtonThemeData(
          buttonColor: Color(0xFFbc0000),
          textTheme: ButtonTextTheme.primary,
        ),
        cardTheme: CardTheme(
          color: Colors.white,
          margin: EdgeInsets.all(10.0),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10.0),
          ),
        ),
        appBarTheme: AppBarTheme(
          backgroundColor: Color(0xFF5a0f19),
          titleTextStyle: TextStyle(
            color: Colors.white,
            fontSize: 20.0,
            fontFamily: 'Sedan',
          ),
        ),
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Livros Disponíveis'),
        ),
        body: isLoading
            ? Center(child: CircularProgressIndicator())
            : Stack(
                children: [
                  ListView.builder(
                    itemCount: books.length,
                    itemBuilder: (context, index) {
                      final book = books[index];
                      return Card(
                        margin: EdgeInsets.all(10.0),
                        child: Padding(
                          padding: EdgeInsets.all(10.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                book['title'],
                                style: TextStyle(
                                  fontSize: 18.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(height: 5.0),
                              Text('Autor: ${book['autor']}'),
                              Text('Editora: ${book['publisher']}'),
                              Text('Páginas: ${book['pages']}'),
                              Text('Gênero: ${book['genre']}'),
                              SizedBox(height: 10.0),
                              ElevatedButton(
                                onPressed: () => deleteBook(book['bookId']),
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Color(0xFFbc0000),
                                  foregroundColor: Colors.white,
                                ),
                                child: Text('Excluir Livro'),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                  Positioned(
                    bottom: 16.0,
                    right: 16.0,
                    child: FloatingActionButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/registerbook');
                      },
                      backgroundColor: Color(0xFF700000),
                      child: Icon(Icons.add, color: Colors.white),
                    ),
                  ),
                ],
              ),
      ),
    );
  }
}
